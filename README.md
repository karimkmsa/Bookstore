# Bookstore REST API

## Overview

Bookstore REST API is a backend application built with Node.js, Express.js, and MongoDB. The API allows users to perform CRUD operations on books and manage users associated with books.

This project was developed as a Backend Development Internship Task to demonstrate RESTful API design, database integration, validation, filtering, searching, and pagination.

---

## Features

### Books

* Create a new book
* Get all books
* Get a single book by ID
* Update book details
* Delete a book

### Users

* Create a new user
* Get all users
* Get a single user by ID
* Update user information
* Delete a user

### Additional Features

* Input validation using express-validator
* Search by title and author
* Pagination
* Filtering
* Sorting
* Field selection
* User-Book relationship using MongoDB references
* MongoDB Atlas integration

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Validator
* Postman
* Git & GitHub
* Dotenv

---

## Project Structure

```bash
bookstore-api/
├── dataBase/
│   └── models/
│
│
├── src/
│   ├── modules/
│   │   ├── Book/
│   │   └── User/
│   │
│   ├── utils/
│   │   └── ApiFeatures.js
│   │
│   ├── middlewares/
│   └── validation/
│
│
├── .env
├── index.js
└── package.json
```

---

## Installation

### Clone the repository

```bash
git clone [YOUR_REPOSITORY_LINK](https://github.com/karimkmsa/Bookstore)
```

### Navigate to project folder

```bash
cd Bookstore
```

### Install dependencies

```bash
npm install
```

### Create .env file

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

### Run the application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## API Endpoints

### Book Routes

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| POST   | /books     | Create a book     |
| GET    | /books     | Get all books     |
| GET    | /books/:id | Get a single book |
| PUT    | /books/:id | Update a book     |
| DELETE | /books/:id | Delete a book     |

---

### User Routes

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| POST   | /users     | Create a user     |
| GET    | /users     | Get all users     |
| GET    | /users/:id | Get a single user |
| PUT    | /users/:id | Update a user     |
| DELETE | /users/:id | Delete a user     |

---

## Sample Book Request

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16",
  "user": "USER_ID"
}
```

---

## Sample User Request

```json
{
  "name": "Karim Khaled",
  "email": "karim@example.com",
  "password": "123456"
}
```

---

## Search

Search by title or author:

```http
GET /books?keyword=atomic
```

```http
GET /books?keyword=james
```

---

## Pagination

Get books by page:

```http
GET /books?page=1
```

```http
GET /books?page=2
```

---

## Sorting

Sort by price ascending:

```http
GET /books?sort=price
```

Sort by price descending:

```http
GET /books?sort=-price
```

---

## Filtering

Get books with price greater than or equal to 20:

```http
GET /books?price[gte]=20
```

Get books with price less than 50:

```http
GET /books?price[lte]=50
```

---

## Field Selection

Return only selected fields:

```http
GET /books?fields=title,author
```

---

## Validation

The project uses express-validator to validate:

* Title
* Author
* Price
* ISBN
* Published Date
* User ID

Invalid requests return appropriate validation error messages.

---

## Future Improvements

* JWT Authentication
* Password Hashing with bcrypt
* User Login & Registration
* Role-Based Authorization
* Book Reviews
* Image Uploads

---

## Author

Karim Khaled

Backend Developer | Node.js | Express.js | MongoDB
