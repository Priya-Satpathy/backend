import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div id='navbar'>
      <h1>Welcome User</h1>
      <div>
        <ul id='ul-navbar'>
            <li><Link to ='/'className='active'> Home</Link></li>
            <li><Link to ='/todolist'>TodoList</Link></li>
            <li><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
