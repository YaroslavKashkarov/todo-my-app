import Todo from './Todo'
import styles from './TodoList.module.css'

// @ts-ignore
function TodoList({todos, deleteTodo}) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((
        // @ts-ignore
        todo, index) => (<Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />))}
    </div>
  )
}

export default TodoList