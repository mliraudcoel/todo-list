import React, { useState, useContext } from 'react';
import CtxTodo from '../CtxTodo';
import './FormTodo.css';

const FormTodo = () => {
  const [todos, setTodos] = useContext(CtxTodo);
  const [form, setForm] = useState({
    title:'',
    describ:'',
    category:'',
  })
  console.log(form)
const addTodo = () => {
  setTodos([...todos, form]);
  setForm({
    title:'',
    describ:'',
    category:'',
  })
}
  return(
    <div className="card mb-4">
      <div className="card-body">
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Title</label>
        <input type="text" className="form-control" id="Title" value={form.title} onChange={(e) => setForm({...form, title:e.target.value})}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input type="text" className="form-control" id="Description" value={form.describ} onChange={(e) => setForm({...form, describ:e.target.value})}/>
      </div>
      <label for="pet-select">Choose a category:</label>
      <div className="category">
        <select onChange={(e) => setForm({...form, category:e.target.value})} id="category" value={form.category}>
            <option value="">Category</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
        </select>
      </div>
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
    </div>
  )
};

export default FormTodo;