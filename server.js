const express = require("express");

const app = express();
const PORT = 3000;

// JSON request body унших тохиргоо
app.use(express.json());

// Энгийн test route
app.get("/", (req, res) => {
  res.send("URL Shortener backend is running");
});

// Server асаах хэсэг
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
