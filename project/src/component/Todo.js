import React from 'react'

function TodoItem(props) => {
  return (
    <div>
      <h3>{props.item}</h3>
    </div>
  )
}

export default TodoItem