import React from 'react';

const Todo = () => {
  return(
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Todo title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
};

export default Todo;