import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div>
      <li key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</li>
      
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>edit</button>
     
    </div>
  ));
};

export default Todo;