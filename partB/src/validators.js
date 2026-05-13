function isValidHttpUrl(value) {
  if (!value || typeof value !== "string") {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function validateExpiresAt(value) {
  if (!value) {
    return {
      valid: true,
      normalized: null
    };
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return {
      valid: false,
      message: "expiresAt must be a valid date"
    };
  }

  if (date.getTime() <= Date.now()) {
    return {
      valid: false,
      message: "expiresAt must be a future date"
    };
  }

  return {
    valid: true,
    normalized: date.toISOString()
  };
}

module.exports = {
  isValidHttpUrl,
  validateExpiresAt
};
