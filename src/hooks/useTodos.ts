import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { generateId } from '../lib/utils';
import { trackTodoAction } from '../lib/analyticsUsage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('websparks-todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('websparks-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos(prev => [newTodo, ...prev]);
    trackTodoAction('create', newTodo.id);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    trackTodoAction('toggle', id);
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    trackTodoAction('delete', id);
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
