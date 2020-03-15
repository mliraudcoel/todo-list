import React, { useContext, useReducer } from 'react';
import './Todo.css';
import CtxTodo from '../CtxTodo';

const Todo = (props) => {
  const [todos, setTodos] = useContext(CtxTodo);
  const deleteTodo = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
  }
  console.log(props.category)
  return(
    <div>
    {props.title ? (
      <div className={props.category === 'Work' ? 'work' : 'family'}>
      <div className="container_title">
        <h5 className="card-title">{props.title}</h5>
        <img src={`${process.env.PUBLIC_URL}/assets/images/bin.png`} alt="trash" onClick={deleteTodo} />
      </div>
      <p className="card-text">{props.describ}</p>
        {/* {props.title ? (
        <div> */}
        <p className="card-category">Category: {props.category}</p>
        {/* </div>
        ) : null } */}
        </div>
        ) : null }
    </div>
  )};

export default Todo;

