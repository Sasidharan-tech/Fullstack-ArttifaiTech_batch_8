# Todo App

A full-stack Todo application with a React + TailwindCSS frontend and an Express + MongoDB backend.

---

## Project Structure

```
todo-backend/    # Node.js/Express/MongoDB backend
todo-frontend/   # React/TailwindCSS frontend (Vite)
```

---

## Backend (`todo-backend`)

### Features

- REST API for managing todos (CRUD)
- MongoDB database (via Mongoose)
- CORS enabled for frontend communication

### Setup

1. **Install dependencies:**
   ```sh
   cd todo-backend
   npm install
   ```

2. **Configure environment:**
   - Edit `.env` with your MongoDB URI and desired port.

3. **Start the server:**
   ```sh
   node server.js
   ```
   The server runs on `http://localhost:5000`.

---

## Frontend (`todo-frontend`)

### Features

- Modern React (with hooks)
- TailwindCSS styling
- Axios for API requests

### Setup

1. **Install dependencies:**
   ```sh
   cd todo-frontend
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app runs on `http://localhost:5173` (default Vite port).

---

## Usage

- Open the frontend in your browser.
- Add, complete, and delete todos.
- All changes are persisted to MongoDB via the backend API.

---

## Folder Overview

- **todo-backend/server.js**: Main backend server file.
- **todo-backend/models/Todo.js**: Mongoose model for todos.
- **todo-backend/routes/todoRoutes.js**: (Optional) Express router for todos.
- **todo-frontend/src/**: React components and styles.

---

## Customization

- Update MongoDB connection in `.env` or directly in `server.js`.
- Adjust API endpoints in frontend (`src/Todo.jsx`) if backend URL changes.

---
## Screenshots
![Screenshot 00](https://github.com/user-attachments/assets/adc24148-9d63-47c4-9eaa-5b7b3638a0c9)

![Screenshot (18)](https://github.com/user-attachments/assets/0bd0c4c8-235e-4c91-bc90-7556200544b5)


![Screenshot 2](https://github.com/user-attachments/assets/74c97d52-540c-40f5-a8cb-87ed0b823d42)



## License

This project is for educational purposes.


 



## Support

For support, email sasidharan.m2004@gmail.com or join our Slack channel.
