import React, { useState } from 'react';
import Axios from 'axios';
import './page.css';

export  function Register () {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

  const getUser =  (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3001/v1/user',{email, age , username}).then((res)=>{
        console.log(res)
    })
      
  };

  return (
    <div className='container'>
      <h1 className='header register'>Register page</h1>
      <form action=''>
        <input
          type='text'
          name='email'
          className='box name'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='number'
          name='age'
          className='box age'
          placeholder='age'
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type='text'
          name='username'
          className='box username'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={getUser} className='btn createUser'>
          Submit
        </button>
      </form>
    </div>
  );
}