import React, {useReducer, useState} from 'react'

//state
import { initialState, todoReducer } from "../reducers/todoReducer";

// component
import TodoItems from './TodoItems'

function Todo() {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const [newTodoItem, setNewTodoItem] = useState('');

	const handleChanges = e => {
    setNewTodoItem(e.target.value);
	};
	
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch({ type: "ADD_TODO", payload: newTodoItem })
		setNewTodoItem('')
	}

	const toggleCompleted = (todoId) => {
		dispatch({ type: "TOGGLE_COMPLETED", payload: todoId})
		console.log(state)
	}

	const clearCompleted = () => {
		dispatch({type: 'CLEAR_COMPLETED'})

	}
  return (
	<div>
		{state.todos.map(todo => (
			<TodoItems todo= {todo} toggleCompleted= {toggleCompleted}/>
		))}
		<form onSubmit= {submitHandler}> 
			<input 
			onChange={handleChanges}
			value={newTodoItem}
			/>
			<button type= 'submit'>Add Todo</button>
			<button onClick= {clearCompleted}>Remove Completed</button>
		</form>
	</div>			
  )
}

export default Todo