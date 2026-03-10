import React from 'react'
import { useState } from 'react'
import './Register.css'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Register = () => {
    const[name,setName] = useState('');
    const[mail,setEmail] = useState('')
    const[pass,setPass] = useState('')

   async function handleSubmit(){

        // const data = {name,mail,pass};
      try {
          const data = {
              username: name,
              email: mail,
              password: pass
      }
        
        const res = await axios.post("http://localhost:8000/api/v1/register", data)
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
        <h2>Already have an account? <Link to = '/login'>Login</Link></h2>
        <div className='btn-group'>

            <button onClick={handleSubmit}>Register</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    </div>
  </div>
  )
}

export default Register
