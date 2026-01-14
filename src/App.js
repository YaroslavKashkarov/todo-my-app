import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
// @ts-ignore
import './App.css'
import TdodForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  // @ts-ignore
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      // @ts-ignore
      id: uuidv4()
    }
    console.log(newTodo)
    // @ts-ignore
    setTodos([...todos, newTodo])
  }

  // @ts-ignore
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
