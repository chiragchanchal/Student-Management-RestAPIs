# Student Management REST API

A simple and lightweight REST API built with Node.js and Express.js to manage student records. This was built as part of an in-class lab assignment to practice routing, middleware, and performing basic CRUD operations without using an external database.

## Features
- **No Database:** Uses an in-memory JSON array to store data, keeping things super lightweight.
- **Custom Logger:** Includes a custom middleware that logs the HTTP method, URL, and time for every request.
- **Modular Routing:** Routes are neatly separated into their own file using `express.Router()`.
- **Full CRUD:** You can add, view, update, and remove students easily.
- **Error Handling:** Returns proper HTTP status codes (200, 201, 400, 404, 500) so you know exactly what happened.

## Project Structure
```text
├── data/
│   └── students.js        # The in-memory array holding our student data
├── middleware/
│   └── logger.js          # Custom logging middleware
├── routes/
│   └── studentRoutes.js   # All the API endpoints for students
├── app.js                 # The main entry point of the application
└── package.json
```

## How to Run It

1. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node app.js
   ```
   The server will start on `http://localhost:3000`.

## API Endpoints

You can test these out using tools like Postman!

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/students` | Get a list of all students |
| `GET` | `/students/:id` | Get details of a specific student by ID |
| `POST` | `/students` | Add a new student (requires `name` and `course` in JSON body) |
| `PUT` | `/students/:id` | Update an existing student's info |
| `DELETE` | `/students/:id` | Remove a student from the record |

### Example Request Body (POST/PUT)
```json
{
  "name": "Alex",
  "course": "BSc Computer Science"
}
```

Happy coding! 🚀
