import React, { useState } from 'react'

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
    <div>
      <h1>Login Page</h1>
      <input type="mail" value={mail} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="pass" value={pass} placeholder='Your Password' onChange={(e)=>setPass(e.target.value)}/>
        <div>
            <button onClick={handleSubmit}>Login</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    </div>
  )
}

export default Login
