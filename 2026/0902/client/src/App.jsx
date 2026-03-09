import About from "./pages/About/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <>
     <Register />
     <Toaster />
     <Login />
     
    </>
  )
}

export default App
