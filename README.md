# English Diary - Website học từ vựng tiếng Anh cho trẻ em

## Mục đích

Giúp trẻ em tiếp cận sớm với tiếng Anh, mở rộng vốn từ với các chủ đề từ vựng gần gũi.

## Phạm vi và đối tượng

Trẻ em

## Chức năng

- Đăng ký, đăng nhập
- Xem mô tả khóa học
- Xem danh sách các chủ đề theo từng khoá học
- Xem và chọn các bài học theo từng chủ đề
- Sửa thông tin người dùng
- Xem lộ trình học
- Tra từ vựng
- Xem các tiện ích khác như video, bài hát, truyện

## Công nghệ sử dụng

- Server Backend: Expressjs
- Web Frontend: HTML, CSS, Javascript
- Database: MySQL server
- API: text-to-speech, Fetch

## Bản deploy server trên heroku

Truy cập: https://englishdiary-web-server.herokuapp.com/ trước khi chạy deploy web để thao tác nhanh và đúng đắn hơn, do server có thể ngủ sau 30p không hoạt động.

## Bản demo

Login với các thông tin sau để trải nghiệm ngay web.

|    username   |  password |
|:-------------:|:---------:|
|  thaobone163  |  1632001  |

## Các thư mục phát triển của Website

- Front end repository: [EnglishDiary - Client](https://github.com/thaobone163/EnglishDiary-client)
- Back end repository: [EnglishDiary - Server](https://github.com/thaobone163/EnglishDiary-server)

## Hướng dẫn cài đặt

- Back end: clone - Server -> `yarn install` -> `yarn dev`
- Front end: clone - Client -> `yarn install` -> `yarn start`

```js
// Đi đến các file thuộc components trong src của front end, chọn server cần kết nối:
// chọn một trong hai URL
  const url = 'https://englishdiary-web-server.herokuapp.com' //server online
  const url = 'http://localhost:5000' //server local
```

## Nhóm phát triển

- [Bùi Thị Phương Thảo](https://github.com/thaobone163)
- [Nguyễn Thị Ngọc Hoa](https://github.com/hoa1172001)
