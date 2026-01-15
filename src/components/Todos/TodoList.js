import Todo from './Todo'
import styles from './TodoList.module.css'

// @ts-ignore
function TodoList({todos, deleteTodo, toggleTodo}) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((
        // @ts-ignore
        todo) => (<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />))}
    </div>
  )
}

export default TodoList