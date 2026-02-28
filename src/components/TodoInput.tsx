import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit} className="relative mb-8 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i className="bi bi-plus-lg text-secondary-400 text-xl"></i>
      </div>
      <input
        id="new-todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 
                   rounded-2xl text-lg text-secondary-900 placeholder-secondary-400
                   focus:outline-none focus:border-primary-500 focus:ring-4 
                   focus:ring-primary-50 transition-all duration-300 shadow-soft"
      />
      <button
        id="add-todo-btn"
        type="submit"
        disabled={!text.trim()}
        className="absolute right-2 top-2 bottom-2 px-6 bg-primary-600 
                   text-white rounded-xl font-medium hover:bg-primary-700 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Add
      </button>
    </form>
  );
};
