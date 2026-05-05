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

## 7. AI ашигласан тухай тэмдэглэл

AI-г stack сонголтын хувилбарууд гаргах, давуу болон сул талыг харьцуулах, бичиг баримтын эхний draft гаргахад ашигласан. Гэхдээ эцсийн stack сонголтыг даалгаврын шаардлага, төслийн хэмжээ, тестлэхэд хялбар байдал дээр үндэслэн гараар шалгаж сонгосон.
