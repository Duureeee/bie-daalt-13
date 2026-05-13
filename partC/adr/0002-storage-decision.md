# ADR-002: URL мэдээллийг SQLite database-д хадгалах шийдвэр

## Status
Accepted

## Context
URL shortener систем нь урт URL, богино код, click count, created date, expiration date зэрэг мэдээллийг хадгалах шаардлагатай. Эхний хувилбарт in-memory array ашиглах боломж байсан боловч app restart хийхэд бүх мэдээлэл устах сул талтай байсан.

## Decision
URL-ийн мэдээллийг SQLite database-д хадгалахаар шийдсэн. SQLite нь жижиг хэмжээний project-д тохиромжтой, тусдаа database server шаардахгүй, Node.js project-д амархан холбогдоно.

## Alternatives Considered
### 1. In-memory array
Давуу тал: Хамгийн энгийн, хурдан эхлүүлж болно.
Сул тал: Server restart хийхэд бүх data устна.

### 2. JSON file
Давуу тал: Database server шаардлагагүй.
Сул тал: Concurrent write хийх үед асуудал гарах боломжтой, query хийхэд тохиромж муутай.

### 3. SQLite
Давуу тал: Жижиг project-д тохиромжтой, persistent storage өгнө, SQL query ашиглаж болно.
Сул тал: Том production системд PostgreSQL шиг хүчтэй биш.

## Consequences
SQLite ашигласнаар URL, click counter, expiration date зэргийг илүү найдвартай хадгалах боломжтой болсон. Мөн test хийхэд memory database ашиглаж болох давуу талтай. Гэхдээ production түвшинд хэрэглэгч ихтэй систем бол PostgreSQL эсвэл MySQL рүү шилжих шаардлагатай.

## AI Assistance and Human Review
AI эхэндээ энгийн in-memory storage санал болгож болох байсан. Би даалгаврын шаардлага болон project-ийн бодит хэрэгцээг харж persistent хадгалалт хэрэгтэй гэж үзсэн. Тиймээс SQLite сонгож, SQL query-г parameterized байдлаар ашиглах нь илүү зөв гэж шийдсэн.