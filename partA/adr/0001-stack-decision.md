# ADR-001: URL shortener төсөлд FastAPI stack сонгох шийдвэр

## Status

Accepted

## Date

2026-04-30

## Context

Энэхүү бие даалт нь AI-assisted software construction workflow-г жижиг project дээр хэрэгжүүлэх зорилготой.

Сонгосон project нь URL shortener бөгөөд дараах үндсэн боломжуудтай байна.

- санамсаргүй богино код үүсгэх
- богино кодоор эх URL руу redirect хийх
- click counter хадгалах
- expiration буюу хугацаа дуусах logic хэрэгжүүлэх
- minimal frontend хийх

Project нь assignment-ийн хугацаанд амжихаар жижиг байх хэрэгтэй. Гэхдээ программ хангамжийн бүтээлтийн бодит workflow-г харуулахуйц хангалттай feature-тэй байх ёстой.

Дараах 3 stack-ийг авч үзсэн.

1. Python + FastAPI + SQLite + pytest
2. Node.js + Express + SQLite + Jest
3. Java + Spring Boot + H2/SQLite + JUnit

## Decision

Энэ project-д дараах stack-ийг ашиглахаар шийдсэн.


Backend: Python + FastAPI
Database: SQLite
Testing: pytest
Frontend: HTML, CSS, JavaScript
API documentation: FastAPI OpenAPI
Version control: Git + GitHub
Reasons

FastAPI-г сонгосон шалтгаанууд:

жижиг REST API хийхэд энгийн
OpenAPI documentation автоматаар үүсгэдэг
pytest-тэй сайн зохицдог
request болон response model тодорхой бичих боломжтой
Spring Boot шиг хэт хүнд биш
SQLite нь жижиг URL shortener project-д хангалттай
5 өдөрт хувааж commit хийхэд тохиромжтой жижиг бүтэцтэй
Consequences

Эерэг үр дагавар:

boilerplate code бага
хөгжүүлэлт хурдан
unit test бичихэд хялбар
API documentation автоматаар гарна
assignment-ийн шаардлагад сайн тохирно

Сөрөг үр дагавар:

SQLite нь өндөр traffic-тэй production системд тохиромжгүй
project structure-ийг өөрөө зөв зохион байгуулах хэрэгтэй
URL validation болон expiration logic дээр анхаарах шаардлагатай
Alternatives considered
Node.js + Express

Express нь сайн хувилбар байсан. Backend болон frontend дээр JavaScript ашиглаж болох давуу талтай. Гэхдээ OpenAPI documentation, request validation зэрэгт нэмэлт package болон тохиргоо шаардлагатай.

## Java + Spring Boot

Spring Boot нь том enterprise application хийхэд сайн. Гэхдээ энэ жижиг assignment project-д хэтэрхий хүнд бөгөөд boilerplate ихтэй гэж үзсэн.

## AI usage

AI-г stack хувилбарууд гаргах, trade-off харьцуулах, ADR-ийн бүтэц draft хийхэд ашигласан. Эцсийн шийдвэрийг assignment-ийн scope болон техникийн шаардлагад үндэслэн гараар шалгаж баталгаажуулсан.