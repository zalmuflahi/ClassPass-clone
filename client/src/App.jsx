import { useState } from 'react'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import BusinessPage from './components/BusinessPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {

  const [userObj, setUserObj] = useState(null)

return (
  <div className="App">
    <BrowserRouter>      
      <Header userObj={userObj} setUserObj={setUserObj} />
        <Routes>
                
            <Route path={'/'} element={<HomeScreen />} />
            <Route path={'/Login'} element={<Login userObj={userObj} setUserObj={setUserObj}/>} />
            <Route path={'/BusinessPage'} element={<BusinessPage />} />
          
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </div>
)
}
export default App

