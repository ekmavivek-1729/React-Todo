import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),   // we generate random number for id , we have another method like date to use 
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} >
      {props.edit ? (
        <>
          <input placeholder='Update your item' value={input} onChange={handleChange} name='text' ref={inputRef} />
          <button onClick={handleSubmit} >Update</button>
        </>
      ) : (
        <>
          <input placeholder='Add a todo' value={input} onChange={handleChange} name='text' ref={inputRef} />
          <button onClick={handleSubmit} >Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;