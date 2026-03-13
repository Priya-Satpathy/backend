import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'

const Landing = () => {
  return (
    <>
    
    <Navbar />
      <div id='container'>
        <div id='register-box'>
          <h1>Effortless Task management</h1>
          <p>
            Stay organized and productive with our powerful todo app. 
            Manage your tasks, collaborate with your team, and never miss a deadline.
          </p>

          <div id='btn-login'>
            <button><Link to='/register'>Register</Link></button>
            <button><Link to='/login'>Login</Link></button>
          </div>
        </div>

        <div id='land-img'>
          <img src="./todo.jpg" alt="todo" />
        </div>
      </div>

    </>
  )
}

export default Landing