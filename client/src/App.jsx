import { useEffect, useState } from 'react'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import BusinessPage from './components/BusinessPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bpmenu from './components/Bpmenu.jsx'

function App() {
  const [credits, setCredits] = useState(200)
  const [userObj, setUserObj] = useState(null)
  const [bus, setBus] = useState([])
  useEffect(() => {
    let request = async () => {
      let req = await fetch('http://127.0.0.1:3000/business')
      let res = await req.json()
      console.log(res)
      setBus(res)
    }
    request()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header userObj={userObj} setUserObj={setUserObj} credits={credits} setCredits={setCredits} />
        <Routes>
          <Route path={'/'} element={<HomeScreen />} />
          <Route path={'/Login'} element={<Login userObj={userObj} setUserObj={setUserObj} />} />
          <Route path={'/BusinessPage/:id'} element={<BusinessPage />} />
          <Route path={'/menu'} element={<Bpmenu bus={bus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

