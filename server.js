const express = require("express");

const app = express();
const PORT = 3000;

// JSON request body унших тохиргоо
app.use(express.json());

// Түр хадгалах массив
// Дараа нь database эсвэл JSON file болгож сайжруулж болно
let urls = [];

// Санамсаргүй short code үүсгэх функц
function generateShortCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

// Энгийн test route
app.get("/", (req, res) => {
  res.send("URL Shortener backend is running");
});

// Урт URL-оос богино URL үүсгэх endpoint
app.post("/api/shorten", (req, res) => {
  const { longUrl, expiresAt } = req.body;

  if (!longUrl) {
    return res.status(400).json({
      error: "longUrl is required",
    });
  }

  const shortCode = generateShortCode();

  const newUrl = {
    longUrl: longUrl,
    shortCode: shortCode,
    shortUrl: `http://localhost:${PORT}/${shortCode}`,
    clickCount: 0,
    createdAt: new Date().toISOString(),
    expiresAt: expiresAt || null,
  };

  urls.push(newUrl);

  res.status(201).json({
    shortCode: newUrl.shortCode,
    shortUrl: newUrl.shortUrl,
  });
});

// Бүх URL жагсаалтыг харах test endpoint
app.get("/api/urls", (req, res) => {
  res.json(urls);
});

// Богино URL-оор original URL руу redirect хийх endpoint
app.get("/:shortCode", (req, res) => {
  const shortCode = req.params.shortCode;

  const urlData = urls.find((item) => item.shortCode === shortCode);

  if (!urlData) {
    return res.status(404).json({
      error: "Short URL not found",
    });
  }

  if (urlData.expiresAt) {
    const today = new Date();
    const expirationDate = new Date(urlData.expiresAt);

    if (today > expirationDate) {
      return res.status(410).json({
        error: "Short URL has expired",
      });
    }
  }

  urlData.clickCount += 1;

  res.redirect(urlData.longUrl);
});

// Server асаах хэсэг
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});