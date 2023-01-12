import { useState } from 'react'
import Login from './components/Login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

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
      element: <Home count={count} />,
    },
{
  path: "/Login",
  element: <Login count={count} />,
},
  ])

return (
  <div className="App">
    <RouterProvider router={router} /> 
  </div>
)
}
export default App

