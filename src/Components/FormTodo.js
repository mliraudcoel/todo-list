import React, { useState } from 'react';

const FormTodo = () => {
  const [form, setForm] = useState({
    title:'',
    describ:''
  })
  return(
    <div className="card mb-4">
      <div className="card-body">
      <div class="form-group">
        <label for="exampleInputPassword1">Title</label>
        <input type="text" className="form-control" id="Title" value={form.title} onChange={(e) => setForm({...form, title:e.target.value})}/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" className="form-control" id="Description" value={form.describ} onChange={(e) => setForm({...form, describ:e.target.value})}/>
      </div>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  )
};

export default FormTodo;