const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Replace with your actual Atlas connection URI
mongoose.connect("mongodb+srv://sasidharanm2004:sasidharanm2004@cluster0.y4fvf5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a new todo
app.post("/todos", async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text, isComplete: false });
  await newTodo.save();
  res.json(newTodo);
});

// Toggle completion
app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.isComplete = !todo.isComplete;
  await todo.save();
  res.json(todo);
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
