import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useTodos } from './hooks/useTodos';
import { trackAppPageView, identifyAppUser } from './lib/analyticsUsage';
import 'websparks-badge';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  useEffect(() => {
    identifyAppUser();
    trackAppPageView();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <main className="flex-grow container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-xl border border-white/20">
          <Header />
          <TodoInput onAdd={addTodo} />
          
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-sm font-semibold text-secondary-500 uppercase tracking-wider">
                Your Tasks
              </h2>
              <span className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-md">
                {todos.filter(t => !t.completed).length} remaining
              </span>
            </div>
            <TodoList 
              todos={todos} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
