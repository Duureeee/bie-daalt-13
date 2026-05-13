process.env.DB_FILE = ":memory:";

const request = require("supertest");
const { app, ready } = require("../src/app");
const { resetDb, closeDb } = require("../src/db");

beforeAll(async () => {
  await ready;
});

beforeEach(async () => {
  await resetDb();
});

afterAll(async () => {
  await closeDb();
});

describe("URL Shortener API", () => {
  test("POST /api/shorten creates a short URL with valid URL", async () => {
    const response = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "https://example.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body.shortCode).toBeDefined();
    expect(response.body.shortUrl).toContain(response.body.shortCode);
    expect(response.body.longUrl).toBe("https://example.com");
  });

  test("POST /api/shorten rejects empty body", async () => {
    const response = await request(app).post("/api/shorten").send({});

    expect(response.statusCode).toBe(400);
  });

  test("POST /api/shorten rejects invalid URL", async () => {
    const response = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "not-a-url" });

    expect(response.statusCode).toBe(400);
  });

  test("POST /api/shorten rejects unsupported protocol", async () => {
    const response = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "ftp://example.com/file.txt" });

    expect(response.statusCode).toBe(400);
  });

  test("POST /api/shorten accepts valid future expiresAt", async () => {
    const future = new Date(Date.now() + 86400000).toISOString();

    const response = await request(app)
      .post("/api/shorten")
      .send({
        longUrl: "https://example.com",
        expiresAt: future
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.expiresAt).toBe(future);
  });

  test("POST /api/shorten rejects past expiresAt", async () => {
    const past = new Date(Date.now() - 86400000).toISOString();

    const response = await request(app)
      .post("/api/shorten")
      .send({
        longUrl: "https://example.com",
        expiresAt: past
      });

    expect(response.statusCode).toBe(400);
  });

  test("GET /:code redirects for valid short code", async () => {
    const created = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "https://example.com" });

    const response = await request(app).get(`/${created.body.shortCode}`);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe("https://example.com");
  });

  test("GET /:code increments clickCount", async () => {
    const created = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "https://example.com" });

    await request(app).get(`/${created.body.shortCode}`);

    const stats = await request(app).get(`/api/urls/${created.body.shortCode}`);

    expect(stats.body.clickCount).toBe(1);
  });

  test("GET /:code returns 404 for missing code", async () => {
    const response = await request(app).get("/missing1");

    expect(response.statusCode).toBe(404);
  });

  test("GET /:code returns 410 for expired URL", async () => {
    const future = new Date(Date.now() + 1000).toISOString();

    const created = await request(app)
      .post("/api/shorten")
      .send({
        longUrl: "https://example.com",
        expiresAt: future
      });

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const response = await request(app).get(`/${created.body.shortCode}`);

    expect(response.statusCode).toBe(410);
  });

  test("GET /api/urls/:code returns statistics", async () => {
    const created = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "https://example.com" });

    const response = await request(app).get(`/api/urls/${created.body.shortCode}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.shortCode).toBe(created.body.shortCode);
    expect(response.body.longUrl).toBe("https://example.com");
  });

  test("GET /api/urls/:code returns 404 for unknown code", async () => {
    const response = await request(app).get("/api/urls/unknown");

    expect(response.statusCode).toBe(404);
  });
});
