import React, { useState } from 'react'
import './Login.css'
const Login = () => {
   const[mail,setEmail] = useState('')
    const[pass,setPass] = useState('')
  
      function handleSubmit(e){
         
          console.log(mail);
          console.log(pass)
      }
      function handleClear(e){
         
          setEmail('')
          setPass('')
      }
      
  return (
    <div className='login-container'>
      <div className='login-card'>
      <h1>Login Page</h1>
      <input type="email" value={mail} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" value={pass} placeholder='Your Password' onChange={(e)=>setPass(e.target.value)}/>
        <div className='btn-box'>
            <button onClick={handleSubmit}>Login</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    </div>
    </div>
  )
}

export default Login
