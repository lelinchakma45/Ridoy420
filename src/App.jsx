import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { PlusCircle } from 'lucide-react'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Todo App
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <footer className="mt-8 text-center text-white text-sm">
        Designed by WebSparks AI
      </footer>
    </div>
  )
}

export default App
