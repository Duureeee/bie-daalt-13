const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const dbFile =
  process.env.DB_FILE ||
  path.join(__dirname, "..", "..", "data", "urls.db");

if (dbFile !== ":memory:") {
  fs.mkdirSync(path.dirname(dbFile), { recursive: true });
}

const db = new sqlite3.Database(dbFile);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (error) {
      if (error) reject(error);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) reject(error);
      else resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) reject(error);
      else resolve(rows);
    });
  });
}

async function initDb() {
  await run(`
    CREATE TABLE IF NOT EXISTS urls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      short_code TEXT UNIQUE NOT NULL,
      long_url TEXT NOT NULL,
      click_count INTEGER DEFAULT 0,
      created_at TEXT NOT NULL,
      expires_at TEXT NULL
    )
  `);
}

async function resetDb() {
  await run("DELETE FROM urls");
}

function closeDb() {
  return new Promise((resolve, reject) => {
    db.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

module.exports = {
  db,
  run,
  get,
  all,
  initDb,
  resetDb,
  closeDb
};
