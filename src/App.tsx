import { Navbar } from "./components/Navbar"
import { useState } from "react"
import { SideBar } from "./components/SideBar"
import "./assets/styles/landing.css"

function App() {

  const [gordis, setGordis] = useState("Hola Gordis")

  return (
    <>
      <div className="grid-container">

        <div className="grid-item1">
          <Navbar/>
        </div>


        <div className="grid-item3">
          <SideBar/>
        </div>

        <div className="grid-item2">
          <h1 className="gordis" onClick={() => { setGordis("Bella") }}>{gordis}</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1><h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1><h1>asd</h1>

          <h1>asd</h1>
        </div>

      </div>
    </>
  )
}

export default App
