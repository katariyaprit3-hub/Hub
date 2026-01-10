import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import logo from "/envato.png"
import leftbtni from "/list.png"
import leftarrow from "/right.png"
import download from "/download.png"

import Introduction from "./introduction.jsx"
import Phpinstalation from "./php/phpinstalarion.jsx"

import "./App.css"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault()
        setSidebarOpen(prev => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <header>
        <div className="headerleft">
          <img
            src={leftbtni}
            alt="menu"
            className="leftbtn"
            onClick={() => setSidebarOpen(prev => !prev)}
          />
          <img src={logo} className="logo" alt="Envato" />
        </div>

        <nav className="navigation">
          <input className="searchinput" placeholder="Search" />
          <div className="profile">
            <div className="avtar"></div>
            <h5>You</h5>
          </div>
        </nav>
      </header>

      <div className="mainlayout">

        <aside className={`leftbar ${sidebarOpen ? "active" : ""}`}>
          <div className="leftin">

            <div className="sections active">
              <h1 className="sub">PHP</h1>
              <img src={leftarrow} alt="" />
            </div>

            <div className="subpart">
              <button
                className="phpsub"
                onClick={() => navigate("/php-installation")}
              >
                <img src={download} alt="" />
                Installation
              </button>
            </div>

            <div className="sections">
              <h1 className="sub">Data Structure</h1>
              <img src={leftarrow} alt="" />
            </div>

            <div className="sections">
              <h1 className="sub">Computer Network</h1>
              <img src={leftarrow} alt="" />
            </div>

          </div>
        </aside>

        <main className="contentArea">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/php-installation" element={<Phpinstalation />} />
          </Routes>
        </main>

      </div>
    </>
  )
}
