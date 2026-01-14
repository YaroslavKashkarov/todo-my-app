import {RiDeleteBin2Line, RiTodoFill} from 'react-icons/ri'
import styles from './Todo.module.css'
import {FaCheck} from 'react-icons/fa'
// @ts-ignore
function Todo({todo, deleteTodo}) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deletedIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default Todo