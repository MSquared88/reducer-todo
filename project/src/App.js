import React, { useReducer} from 'react';

//styling
import './App.css';

// state
import { initialState, todoReducer } from "./reducers/todoReducer";

// components
import Todo from './component/Todo'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
