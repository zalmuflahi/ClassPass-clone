import { useState } from 'react'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css"

function App() {

    const router = createBrowserRouter([
    {
    path: "/", 
      element: <HomeScreen  />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ])

return (
  <div className="App">
    <Header />
    <div className="mainComponents">
      <RouterProvider router={router} /> 
    </div>
    <Footer />
  </div>
)
}
export default App

