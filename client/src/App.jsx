import { useState } from 'react'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {

  const Home = () => {
    const navigate = useNavigate() 
    return (
      <div>
        <h1>Home</h1>
        <h2 >Go to login page</h2>
        <button onClick={() => { navigate("/Login") }}>NAV</button>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
    path: "/", 
      element: <Home  />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ])

return (
  <div className="App">
    <Header />
    <RouterProvider router={router} /> 
    <Footer />
  </div>
)
}
export default App

