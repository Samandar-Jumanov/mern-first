import React, {useState} from 'react'
import {Register} from './Pages/register'
import {Users} from './Pages/users'

import './App.css'
const App = () => {
  const [page , setPage ] = useState('users')
 

  return (
    <div className='App'>

     {page === 'users' && <>
     <Users/>
     <button className='btn go' onClick={()=>setPage('register')}>Go to register</button></>}
     {page === 'register' && <Register/>}
     
    </div>
  )
}

export default App