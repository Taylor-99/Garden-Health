import { useEffect, useState } from "react";

const Home = () => {

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem('token'))
  })

  return (
    <div>
        <h1>This is the Dashboard</h1>
    </div>
  )
}

export default Home