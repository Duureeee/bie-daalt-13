const { run, get } = require("./db");
const { isValidHttpUrl, validateExpiresAt } = require("./validators");

const CODE_ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateCode(length = 6) {
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CODE_ALPHABET.length);
    code += CODE_ALPHABET[randomIndex];
  }

  return code;
}

function isExpired(urlRow) {
  if (!urlRow || !urlRow.expires_at) {
    return false;
  }

  return new Date(urlRow.expires_at).getTime() <= Date.now();
}

async function findByCode(shortCode) {
  return get(
    `
    SELECT
      id,
      short_code AS shortCode,
      long_url AS longUrl,
      click_count AS clickCount,
      created_at AS createdAt,
      expires_at AS expiresAt
    FROM urls
    WHERE short_code = ?
    `,
    [shortCode]
  );
}

async function createShortUrl(longUrl, expiresAt) {
  if (!isValidHttpUrl(longUrl)) {
    const error = new Error("longUrl must be a valid http or https URL");
    error.statusCode = 400;
    throw error;
  }

  const expiration = validateExpiresAt(expiresAt);

  if (!expiration.valid) {
    const error = new Error(expiration.message);
    error.statusCode = 400;
    throw error;
  }

  const createdAt = new Date().toISOString();

  for (let attempt = 0; attempt < 5; attempt++) {
    const shortCode = generateCode();

    try {
      await run(
        `
        INSERT INTO urls (short_code, long_url, click_count, created_at, expires_at)
        VALUES (?, ?, 0, ?, ?)
        `,
        [shortCode, longUrl, createdAt, expiration.normalized]
      );

      return findByCode(shortCode);
    } catch (error) {
      if (!String(error.message).includes("UNIQUE")) {
        throw error;
      }
    }
  }

  const error = new Error("Could not generate unique short code");
  error.statusCode = 500;
  throw error;
}

async function incrementClickCount(shortCode) {
  await run(
    `
    UPDATE urls
    SET click_count = click_count + 1
    WHERE short_code = ?
    `,
    [shortCode]
  );

  return findByCode(shortCode);
}

module.exports = {
  generateCode,
  isExpired,
  findByCode,
  createShortUrl,
  incrementClickCount
};
