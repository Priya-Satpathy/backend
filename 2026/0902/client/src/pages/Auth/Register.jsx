import React from 'react'
import { useState } from 'react'
import './Register.css'
const Register = () => {
    const[name,setName] = useState('');
    const[mail,setEmail] = useState('')
    const[pass,setPass] = useState('')

    function handleSubmit(e){
        console.log(name)
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
      <input type="text" value={name} placeholder='Your Name'onChange={(e)=>setName(e.target.value)}/>
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

export default Register
