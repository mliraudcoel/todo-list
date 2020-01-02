import React from 'react';
import Todos from './Components/Todos';
import FormTodo from './Components/FormTodo';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container p-3">
      <Todos />
      <FormTodo />
      </header>
    </div>
  );
}

export default App;
