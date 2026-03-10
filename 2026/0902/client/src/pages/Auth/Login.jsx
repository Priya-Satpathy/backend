import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Login = () => {
   const[mail,setEmail] = useState('')
    const[pass,setPass] = useState('')

    
  
    async function handleSubmit(){

        // const data = {name,mail,pass};
      try {
          const data = {
             
              email: mail,
              password: pass
      }
        
        const res = await axios.post("http://localhost:8000/api/v1/login", data)
        toast.success(res.data.message);
        console.log(res);
        
      } catch (error) {
        toast.error("something went wrong");
        console.log(error)
      }

        // console.log(name)
        // console.log(mail);
        // console.log(pass)
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
      <h2>Don't have an account? <Link to='/register'>Register</Link></h2>
        <div className='btn-box'>
            <button onClick={handleSubmit}>Login</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    </div>
    </div>
  )
}

export default Login
