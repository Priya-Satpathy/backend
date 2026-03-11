import About from "./pages/About/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Toaster />   {/* ✅ Put toaster outside */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App