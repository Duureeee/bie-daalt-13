const express = require("express");
const {
  createShortUrl,
  findByCode,
  incrementClickCount,
  isExpired
} = require("./urlService");

const router = express.Router();

router.post("/api/shorten", async (req, res, next) => {
  try {
    const { longUrl, expiresAt } = req.body;

    const url = await createShortUrl(longUrl, expiresAt);

    res.status(201).json({
      shortCode: url.shortCode,
      shortUrl: `${req.protocol}://${req.get("host")}/${url.shortCode}`,
      longUrl: url.longUrl,
      clickCount: url.clickCount,
      createdAt: url.createdAt,
      expiresAt: url.expiresAt
    });
  } catch (error) {
    next(error);
  }
});

router.get("/api/urls/:code", async (req, res, next) => {
  try {
    const url = await findByCode(req.params.code);

    if (!url) {
      return res.status(404).json({
        error: "Short URL not found"
      });
    }

    return res.json(url);
  } catch (error) {
    next(error);
  }
});

router.get("/:code", async (req, res, next) => {
  try {
    const url = await findByCode(req.params.code);

    if (!url) {
      return res.status(404).json({
        error: "Short URL not found"
      });
    }

    if (isExpired({
      expires_at: url.expiresAt
    })) {
      return res.status(410).json({
        error: "Short URL has expired"
      });
    }

    await incrementClickCount(req.params.code);

    return res.redirect(url.longUrl);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
