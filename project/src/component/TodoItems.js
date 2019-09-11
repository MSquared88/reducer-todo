import React  from 'react'
import Moment from 'react-moment'
import 'moment-timezone';

function TodoItems(props) {
  
  return (
    <div className= 'todo-container'>
      <div 
      className= {`todo${props.todo.completed ? '-completed' : '' }`}
      onClick= {() => props.toggleCompleted(props.todo.id)}
      >
        <h3>{props.todo.item}</h3>
      </div>
        {(!props.todo.completed)
        ? <span></span>
        
        : <div className= 'date-completed'>
            <p><b>Date Completed:</b> <Moment format="YYYY/MM/DD " >{new Date}</Moment></p>
          </div>}
      
    </div>
  )
}

export default TodoItems