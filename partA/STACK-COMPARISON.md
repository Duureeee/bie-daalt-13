# Технологийн stack харьцуулалт

## 1. Зорилго

Код бичиж эхлэхээс өмнө URL shortener төслийг хийхэд тохиромжтой 3 өөр технологийн stack-ийг харьцуулсан. Зорилго нь жижиг REST API, minimal frontend, unit test, OpenAPI documentation-д хамгийн тохиромжтой stack сонгох юм.

## 2. Төслийн шаардлага

Сонгох stack нь дараах шаардлагуудыг хангах ёстой.

- REST API хөгжүүлэх боломжтой байх
- санамсаргүй богино код үүсгэх боломжтой байх
- redirect endpoint хийх боломжтой байх
- click counter хадгалах боломжтой байх
- expiration logic хэрэгжүүлэх боломжтой байх
- SQLite database ашиглах боломжтой байх
- unit test бичихэд амар байх
- энгийн frontend хийх боломжтой байх
- OpenAPI documentation гаргах боломжтой байх
- local орчинд ажиллуулахад хялбар байх

## 3. Харьцуулсан stack-үүд

## Option 1 — Python + FastAPI + SQLite + pytest

### Тайлбар

FastAPI нь Python хэл дээр REST API хөгжүүлэхэд зориулагдсан орчин үеийн framework юм. Request validation, routing, OpenAPI documentation, testing зэрэг боломжуудыг дэмждэг.

### Давуу тал

- Python syntax ойлгомжтой
- FastAPI автоматаар OpenAPI documentation гаргадаг
- pytest ашиглан unit test бичихэд амар
- SQLite нь жижиг assignment project-д хангалттай
- REST API төсөлд тохиромжтой
- Minimal frontend-тэй холбох боломжтой
- Багшид тайлбарлахад хялбар

### Сул тал

- async/sync ялгааг анхаарах хэрэгтэй
- project structure-ийг зөв зохион байгуулах шаардлагатай
- SQLite нь өндөр ачаалалтай production системд тохиромжгүй

### Энэ төсөлд тохирох байдал

Энэ stack нь URL shortener шиг жижиг API-focused төсөлд маш сайн тохирно. Мөн OpenAPI requirement-ийг амархан хангана.

## Option 2 — Node.js + Express + SQLite + Jest

### Тайлбар

Express нь Node.js дээр REST API хийхэд өргөн хэрэглэгддэг lightweight framework юм.

### Давуу тал

- Web development-д түгээмэл хэрэглэгддэг
- Backend болон frontend дээр хоёуланд нь JavaScript ашиглаж болно
- Routing хийхэд энгийн
- Package ecosystem том
- Prototype хурдан хийх боломжтой

### Сул тал

- OpenAPI documentation хийхэд нэмэлт package хэрэгтэй
- Validation болон project structure-ийг илүү гараар шийдэх шаардлагатай
- Async code beginner-т жаахан будилаантай байж болно
- Testing setup хийхэд FastAPI-аас арай илүү boilerplate шаардаж магадгүй

### Энэ төсөлд тохирох байдал

Энэ stack тохиромжтой боловч validation, OpenAPI, testing тал дээр арай илүү гараар тохиргоо хийх шаардлагатай.

## Option 3 — Java + Spring Boot + H2/SQLite + JUnit

### Тайлбар

Spring Boot нь Java дээр production-grade web application хийхэд өргөн ашиглагддаг framework юм.

### Давуу тал

- Том системд тохиромжтой architecture pattern-тэй
- Enterprise түвшинд өргөн хэрэглэгддэг
- Testing ecosystem сайн
- Dependency injection сайн дэмждэг
- Structured project хийхэд тохиромжтой

### Сул тал

- Жижиг assignment project-д хэт томдож магадгүй
- Boilerplate ихтэй
- Тохиргоо хийхэд илүү хугацаа орно
- Beginner-т тайлбарлахад арай төвөгтэй
- Minimal frontend холбох нь илүү тохиргоо шаардаж магадгүй

### Энэ төсөлд тохирох байдал

Spring Boot хүчтэй stack боловч энэ даалгаврын жижиг project-д арай хүнд. Энэ assignment-ийн гол зорилго нь AI-assisted workflow турших болохоос enterprise систем хийх биш.

## 4. Харьцуулалтын хүснэгт

| Шалгуур | FastAPI | Express | Spring Boot |
|---|---:|---:|---:|
| Setup хийхэд хялбар | Өндөр | Өндөр | Дунд |
| Beginner-friendly | Өндөр | Дунд | Дунд |
| REST API дэмжлэг | Өндөр | Өндөр | Өндөр |
| OpenAPI дэмжлэг | Маш өндөр | Дунд | Өндөр |
| Testing хийхэд хялбар | Өндөр | Дунд | Өндөр |
| Жижиг project-д тохирох | Маш өндөр | Өндөр | Дунд |
| Boilerplate хэмжээ | Бага | Дунд | Их |
| Тайлбарлахад хялбар | Өндөр | Дунд | Дунд |

## 5. Сонгосон stack

Сонгосон stack:

```text
Python + FastAPI + SQLite + pytest + HTML/CSS/JS
## 6. Сонгосон шалтгаан

FastAPI нь энгийн, хурдан, REST API хийхэд тохиромжтой, мөн OpenAPI documentation автоматаар гаргадаг учраас сонгосон.

URL shortener төсөлд дараах зүйлс хэрэгтэй:

REST API endpoint
redirect endpoint
request validation
click counter
expiration logic
unit test
OpenAPI documentation

FastAPI эдгээр шаардлагуудыг шууд дэмждэг.

SQLite-г сонгосон шалтгаан нь энэ төсөл жижиг бөгөөд тусдаа database server шаардлагагүй.

pytest-г сонгосон шалтгаан нь backend logic болон API endpoint-уудыг тестлэхэд энгийн бөгөөд тохиромжтой.

HTML, CSS, JavaScript-г frontend-д сонгосон шалтгаан нь minimal frontend хийхэд хангалттай.

7. AI ашигласан тухай тэмдэглэл

AI-г stack сонголтын хувилбарууд гаргах, давуу болон сул талыг харьцуулах, бичиг баримтын эхний draft гаргахад ашигласан. Гэхдээ эцсийн stack сонголтыг даалгаврын шаардлага, төслийн хэмжээ, тестлэхэд хялбар байдал дээр үндэслэн гараар шалгаж сонгосон.


---

## `partA/adr/0001-stack-decision.md`

```md
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

```text
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

Java + Spring Boot

Spring Boot нь том enterprise application хийхэд сайн. Гэхдээ энэ жижиг assignment project-д хэтэрхий хүнд бөгөөд boilerplate ихтэй гэж үзсэн.

AI usage

AI-г stack хувилбарууд гаргах, trade-off харьцуулах, ADR-ийн бүтэц draft хийхэд ашигласан. Эцсийн шийдвэрийг assignment-ийн scope болон техникийн шаардлагад үндэслэн гараар шалгаж баталгаажуулсан.