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
    // @ts-ignore
    setTodos([...todos, newTodo])
  }

  // @ts-ignore
  const deleteTodoHandler = (id) => {
    // @ts-ignore
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // @ts-ignore
  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
    ))
  }

  return (<div className="App">
    <h1>Todo App</h1>
    <TdodForm addTodo={addTodoHandler} />
    <TodoList toggleTodo={toggleTodoHandler} todos={todos} deleteTodo={deleteTodoHandler} />
  </div>)
}

export default App
