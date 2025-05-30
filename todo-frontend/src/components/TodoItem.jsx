import React from 'react';

export const TodoItem = ({ text, isComplete, id, toggleTask,deleteTodo }) => {
  return (
    <div className="flex justify-between items-center">
      <label
        onClick={() => toggleTask(id)}
        className={`flex items-center gap-2 text-sm cursor-pointer select-none ${
          isComplete ? 'line-through text-zinc-400' : 'text-zinc-800'
        }`}
      >
        {text}
      </label>
      <div className="flex gap-2 items-center">
        <div className="p-1 hover:bg-red-50 rounded-md" onClick={() =>
            deleteTodo(id)
        }>
          <svg
            className="hover:fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="#5f6368"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
