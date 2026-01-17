import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import React from 'react'
import Button from '../UI/Button'
// @ts-ignore
function TodoActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
  return (
    <React.Fragment>
      <Button title='Reset todos' onClick={resetTodos}><RiRefreshLine /></Button>
      <Button title='Clear completed todos' onClick={deleteCompletedTodos} disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
    </React.Fragment>
  )
}

export default TodoActions