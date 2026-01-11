import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

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
  const location = useLocation()

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault()
        toggleSidebar()
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeSidebar()
  }, [location.pathname])

  return (
    <>
      {sidebarOpen && (
        <div className="blurs" onClick={closeSidebar}></div>
      )}

      <header>
        <div className="headerleft">
          <img
            src={leftbtni}
            className="leftbtn"
            onClick={toggleSidebar}
          />
          <img src={logo} className="logo" />
        </div>

        <nav className="navigation">
          <input list="input" className="searchinput" placeholder="Search" />
          <datalist id="input">
            <option value="PHP"></option>
          </datalist>
          <div className="profile">
            <div className="avtar"></div>
            <h5>You</h5>
          </div>
        </nav>
      </header>

      <aside className={`leftbar ${sidebarOpen ? "active" : ""}`}>
        <div className="leftin">

          <div className="sections">
            <h1 className="sub">PHP</h1>
            <img src={leftarrow} />
          </div>

          <div className="subpart">
            <button
              className="phpsub"
              onClick={() => {
                navigate("/php-installation")
                closeSidebar()
              }}
            >
              <img src={download} />
              Installation
            </button>
            <button
              className="phpsub"
              onClick={() => {
                navigate("/php-installation")
                closeSidebar()
              }}
            >
              <img src={download} />
              Installation
            </button>
            <button
              className="phpsub"
              onClick={() => {
                navigate("/php-installation")
                closeSidebar()
              }}
            >
              <img src={download} />
              Installation
            </button>
            
          </div>

        </div>
      </aside>

      <main className="contentArea">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/php-installation" element={<Phpinstalation />} />
        </Routes>
      </main>
    </>
  )
}
