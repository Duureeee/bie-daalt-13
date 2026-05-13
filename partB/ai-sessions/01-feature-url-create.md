# AI Session: URL богиносгох feature

## Goal
Урт URL оруулахад богино URL үүсгэдэг үндсэн feature хийх.

## Prompt Summary
AI-аас Node.js + Express ашиглан POST /api/shorten endpoint хэрхэн хийх талаар асуусан. Мөн short code үүсгэх, database-д хадгалах, response буцаах logic-ийн талаар зөвлөгөө авсан.

## AI Suggestion
AI дараах шийдлүүдийг санал болгосон:
- Express route ашиглан POST /api/shorten endpoint үүсгэх
- Request body-оос longUrl авах
- Random 6 тэмдэгттэй short code үүсгэх
- SQLite database-д long URL, short code, click count, created date, expiration date хадгалах
- Response дээр shortCode, shortUrl, longUrl, clickCount буцаах

## Human Review
Би AI-ийн санал болгосон logic-ийг шууд хуулалгүйгээр project-ийн шаардлагатай харьцуулж шалгасан. Зөвхөн URL богиносгохоос гадна expiration болон click counter feature хэрэгтэй гэж үзсэн. Мөн URL validation хийхгүй бол буруу холбоос хадгалагдах эрсдэлтэй гэж шалгасан.

## Final Result
POST /api/shorten endpoint-ийн үндсэн logic тодорхой болсон. Урт URL оруулахад short code үүсгэж, database-д хадгалах flow гарсан.

## Screenshot Evidence
![Working URL Shortener frontend](../../images/Screenshot 2026-05-13 234246.png)
