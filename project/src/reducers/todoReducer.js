export const initialState = {
    todos: [
      {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
      },
      
    ]
  };

export const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return{
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      }
    case 'TOGGLE_COMPLETED':
      let itemToToggle = state.todos.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo, completed: !todo.completed
          }
        } else{
          return todo
        }
      })
      return {...state, todos: [...itemToToggle]}
      
      case 'CLEAR_COMPLETED':
          let clearedTodos = state.todos.filter(item => !item.completed)
          return{
            ...state,
            todos: [...clearedTodos]
          }
          
      
      default:
      return state;
  }
}

