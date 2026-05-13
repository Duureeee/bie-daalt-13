# AI Session: Validation болон алдаа засах

## Goal
Invalid URL, unsupported protocol, empty body, expired date зэрэг алдааг зөв шалгах.

## Prompt Summary
AI-аас URL validation болон expiration date validation хэрхэн хийх талаар асуусан. Мөн security талаас ямар эрсдэл байж болохыг шалгуулсан.

## AI Suggestion
AI дараах санаануудыг өгсөн:
- JavaScript-ийн URL constructor ашиглаж URL шалгах
- http:// болон https:// protocol зөвшөөрөх
- ftp:// зэрэг protocol-ийг reject хийх
- expiresAt байгаа бол Date object болгон шалгах
- өнгөрсөн хугацаа байвал 400 error буцаах
- алдааны message-ийг ойлгомжтой болгох

## Human Review
Би AI-ийн саналыг шалгаад зөвхөн valid URL байх нь хангалтгүй, protocol-ийг бас шалгах ёстой гэж үзсэн. Учир нь URL shortener нь redirect хийдэг тул буруу protocol зөвшөөрөх нь security эрсдэлтэй. Мөн SQL query дээр parameterized query ашиглах нь зөв гэж шалгасан.

## Final Result
validators.js файлд URL болон expiration validation logic тусдаа болсон. Ингэснээр route код цэвэр болж, test бичихэд хялбар болсон.

## Screenshot Evidence
![AI suggested gitignore content](../../images/gitignore_ai.png)
