import React, { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState();
    const handelSubmit = () => {
        
    }
  return (
      <div>
          <h2>Login</h2>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button onClick={handelSubmit}>Login</button>
      </div>
  )
}

export default Login