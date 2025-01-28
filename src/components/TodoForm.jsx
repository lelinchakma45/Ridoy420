import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow mr-2 p-2 border border-gray-300 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200 flex items-center"
      >
        <PlusCircle size={20} className="mr-1" />
        Add
      </button>
    </form>
  )
}

export default TodoForm
