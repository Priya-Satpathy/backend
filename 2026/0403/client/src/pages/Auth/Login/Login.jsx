import React from 'react'
import { useState } from 'react'

const Login = () => {
    const[mail,setEmail] = useState('')
    const[pass,setPass] = useState('')
      function handleSubmit(){
            console.log(name);
            console.log(mail);
            console.log(pass)
            
        }
        function handleClear(e){
        setName('')
        setEmail('')
        setPass('')
    }
  return (
      <div className='container'>
      <div className='register-box'>
      <h1>Register Page</h1>
     
      <input type="mail" value={mail} placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="pass" value={pass} placeholder='Your Password' onChange={(e)=>setPass(e.target.value)}/>
        <div className='btn-group'>
            <button onClick={handleSubmit}>Register</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    </div>

        
    </div>
  )
}

export default Login
