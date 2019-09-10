import React, {useState, useReducer} from 'react';

import './App.css';
import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(titleReducer, initialState);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
