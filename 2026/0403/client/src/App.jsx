import React from 'react'
import Register from './pages/Auth/Register/Register'
import  { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Register />
      <Toaster />
    </div>
  )
}

export default App
