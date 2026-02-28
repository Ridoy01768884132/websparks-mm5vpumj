import React from 'react';
import { Todo } from '../types/todo';
import { cn } from '../lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      id={`todo-item-${todo.id}`}
      className={cn(
        "group flex items-center p-4 mb-3 bg-white rounded-xl border border-slate-100",
        "transition-all duration-300 hover:shadow-md hover:border-primary-100",
        todo.completed && "bg-slate-50"
      )}
    >
      <button
        id={`toggle-btn-${todo.id}`}
        onClick={() => onToggle(todo.id)}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center",
          "transition-colors duration-200",
          todo.completed 
            ? "bg-primary-500 border-primary-500" 
            : "border-secondary-300 hover:border-primary-500"
        )}
      >
        {todo.completed && <i className="bi bi-check text-white text-lg"></i>}
      </button>
      
      <span
        className={cn(
          "flex-grow text-lg transition-all duration-200",
          todo.completed ? "text-secondary-400 line-through" : "text-secondary-900"
        )}
      >
        {todo.text}
      </span>

      <button
        id={`delete-btn-${todo.id}`}
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-secondary-400 
                   hover:text-red-500 transition-all duration-200"
        aria-label="Delete task"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
};
