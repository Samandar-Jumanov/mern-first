
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './page.css'

export const Users = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    Axios.get('http://localhost:3001/v1/user').then((response)=>{
        setList(response.data)
        setIsLoading(false)
    })
  },[])

  return (
    <div className='UsersList'>
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        list.map((user) => (
          <div key={user.id} className='users'>
            <h3>Email: {user.email}</h3>
            <p>Age: {user.age}</p>
            <p>Username: {user.username}</p>
            <hr/>
          </div>
        ))
      )}
    </div>
  )
}
