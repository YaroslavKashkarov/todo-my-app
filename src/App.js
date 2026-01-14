import {useState} from 'react'
// @ts-ignore
import './App.css'
import TdodForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (<div className="App">
    <h1>Todo App</h1>
    <TdodForm addTodo={addTodoHandler} />
    <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
  </div>)
}

export default App
