# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Books

- `GET /api/books`
  - Books index/search
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`

### Bookshelves

- `GET /api/bookshelves`
- `POST /api/bookshelves`
- `GET /api/bookshelves/:id`
- `DELETE /api/bookshelves/:id`
- `GET /api/bookshelves/:id/books`
  - index of all books for a bookshelf

### Reviews

- `GET api/books/:id/reviews`
- `POST api/books/:id/reviews`
- `PATCH app/reviews/:id`
- `DELETE /api/reviews/:id`
