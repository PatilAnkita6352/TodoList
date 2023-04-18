import React from 'react'

export const Todo=({todo,onDelete})=> {
  return (
    <div>
       <h5>{todo.title}</h5>
       <h6>{todo.desc}</h6>
       <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>
         Delete</button>
         <hr/>
         <br/>
    </div>
  )
}
 