import React, {useReducer} from 'react'

function TodoItems(props) {
  
  return (
    <div 
    className= {`todo${props.todo.completed ? '-completed' : '' }`}
    onClick= {() => props.toggleCompleted(props.todo.id)}
    >
      <h3>{props.todo.item}</h3>
    </div>
  )
}

export default TodoItems