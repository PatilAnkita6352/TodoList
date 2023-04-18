import React from 'react'
import { Todo } from './Todo'

export const Todoitem = (props) => {
  let mystyle={
    minHeight:"100vh"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className=' my-3'>Todays work List</h3>
      {props.todo.length===0? <h3>"Your Done with ur todays work"</h3>:
       props.todo.map((todo) => {
        return(<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/> )

      })}
    </div>
  )
}
