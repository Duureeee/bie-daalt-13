# AI Session: Test болон project structure сайжруулах

## Goal
Project-ийн structure-ийг assignment шаардлагад нийцүүлэх, 10-аас дээш test case төлөвлөх.

## Prompt Summary
AI-аас Jest + Supertest ашиглан URL shortener project-д ямар test бичих талаар асуусан. Мөн app.js болон server.js файлыг салгах нь test хийхэд хэрэгтэй эсэхийг асуусан.

## AI Suggestion
AI дараах test case-үүдийг санал болгосон:
- Valid URL shorten хийх
- Empty body reject хийх
- Invalid URL reject хийх
- Unsupported protocol reject хийх
- Future expiresAt accept хийх
- Past expiresAt reject хийх
- Valid short code redirect хийх
- Redirect хийхэд click count нэмэгдэх
- Missing code 404 өгөх
- Expired URL 410 өгөх
- Statistics endpoint зөв ажиллах

## Human Review
Би test case-үүдийг assignment-ийн "Unit test ≥10" шаардлагатай харьцуулж шалгасан. Мөн app.js нь Express app export хийх, server.js нь зөвхөн server асаах үүрэгтэй байвал Supertest ашиглахад илүү цэвэр гэж ойлгосон.

## Final Result
partB/tests/url.test.js файлд 10-аас дээш test case төлөвлөсөн. Project structure partA, partB, partC шаардлагад нийцсэн.

## Screenshot Evidence
![VS Code folder structure](../../images/project_uusgeh.png)
