const { app, ready } = require("./app");

const PORT = process.env.PORT || 3000;

ready
  .then(() => {
    app.listen(PORT, () => {
      console.log(`URL Shortener is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
