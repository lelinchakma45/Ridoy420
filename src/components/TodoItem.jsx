import React from 'react'
import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center bg-gray-100 p-3 rounded-lg">
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`mr-2 p-1 rounded-full ${
          todo.completed ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <Check size={16} className="text-white" />
      </button>
      <span
        className={`flex-grow ${
          todo.completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-1 text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </li>
  )
}

export default TodoItem
