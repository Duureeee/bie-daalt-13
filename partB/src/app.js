const express = require("express");
const path = require("path");
const { initDb } = require("./db");
const urlRoutes = require("./urlRoutes");

const app = express();
const ready = initDb();

app.use(async (req, res, next) => {
  try {
    await ready;
    next();
  } catch (error) {
    next(error);
  }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(urlRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    error: error.message || "Internal server error"
  });
});

module.exports = {
  app,
  ready
};
