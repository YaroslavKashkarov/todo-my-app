import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import React from 'react'
import Button from '../UI/Button'
function TodoActions() {
  return (
    <React.Fragment>
      <Button title='Reset todos' onClick><RiRefreshLine /></Button>
      <Button title='Clear completed todos'><RiDeleteBin2Line /></Button>
    </React.Fragment>
  )
}

export default TodoActions