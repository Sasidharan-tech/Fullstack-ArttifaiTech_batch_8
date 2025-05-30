import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { TodoItem } from './components/TodoItem';

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

 
  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => setTodoList(res.data));
  }, []);

  // Add new todo
  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    axios.post("http://localhost:5000/todos", { text: inputText })
      .then((res) => {
        console.log("Added task:", res.data);
        setTodoList((prev) => [...prev, res.data]);
        inputRef.current.value = "";
      })
      .catch(err => {
        console.error("Error adding task:", err);
      });
  };

  
  const toggleTask = (id) => {
    axios.put(`http://localhost:5000/todos/${id}`).then((res) => {
      setTodoList((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    });
  };

  // Delete a todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodoList((prev) => prev.filter((todo) => todo._id !== id));
    });
  };

  return (
    <>
      <div className="w-[30rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">To-do List</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              ref={inputRef}
              className="bg-amber-50 py-3 px-4 w-full text-sm rounded-sm border focus:outline-none focus:border-amber-500"
              type="text"
              placeholder="Add your task"
            />
          </div>
          <button
            className="bg-sky-400 py-3 px-4 text-white hover:bg-sky-800 text-sm font-medium rounded-sm border-none"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <p className="my-3 text-sm text-zinc-400 px-1">Fill task details</p>
      </div>

      <div className="flex w-[30rem] bg-white shadow py-6 px-4">
        <fieldset className="space-y-2 w-full">
          <legend className="text-pink-600 font-medium">List of tasks</legend>

          {todoList.length === 0 ? (
            <p className="text-sm text-zinc-400 px-1">No tasks added yet</p>
          ) : (
            todoList.map((todo) => (
              <TodoItem
                key={todo._id}
                text={todo.text}
                isComplete={todo.isComplete}
                id={todo._id}
                toggleTask={toggleTask}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </fieldset>
      </div>
    </>
  );
};
