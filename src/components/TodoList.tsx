import React from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div id="empty-state" className="text-center py-12">
        <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
          <i className="bi bi-inbox text-3xl text-secondary-400"></i>
        </div>
        <p className="text-secondary-500 text-lg">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div id="todo-list" className="space-y-1">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
