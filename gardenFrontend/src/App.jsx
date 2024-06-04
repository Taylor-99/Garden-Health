import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./components/Auth"
import CreateProfile from "./pages/profile/NewProfile"


function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <>
      {
        user ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createprofile" element={<CreateProfile user={user}/>} />
        </Routes> :
        <Auth user={user} setUser={setUser} />
      }
    </>
  )
}

export default App
