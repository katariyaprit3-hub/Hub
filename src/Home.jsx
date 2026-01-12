import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

import logo from "/envato.png"
import leftbtni from "/list.png"
import leftarrow from "/right.png"
import download from "/download.png"
import idea from "../public/idea.png";
import code from "../public/code.png";


import Introduction from "./introduction.jsx"
import Phpinstalation from "./php/phpinstalarion.jsx"
import Basicphp from "./php/basicphp.jsx"
import Phpcode from "./php/phpcode.jsx"
import Theory from "./datastructuar/theory.jsx"
import Profile from "./profile.jsx"
import Signsection from "./signsection"


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
                    <img src={logo} onClick={() => {
                        navigate("/intro")
                        closeSidebar()
                    }} className="logo" />
                </div>

                <nav className="navigation">    
                    <div className="profile" onClick={() => {
                        navigate("/profile")
                        closeSidebar()
                    }}>
                        <div className="avtar"></div>
                        <h5>You</h5>
                    </div>
                    <div className="signsecion">
                        <div className="login" onClick={() => {
                                navigate("/Signsection")
                                closeSidebar()
                            }}>
                            <h5>Login</h5>
                        </div>
                        <div className="login" onClick={() => {
                                navigate("/Signsection")
                                closeSidebar()
                            }}>
                            <h5>Sign in</h5>
                        </div>
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
                                navigate("/Basic-php")
                                closeSidebar()
                            }}
                        >
                            <img src={idea} />
                            BAsic PHP
                        </button>
                        <button
                            className="phpsub"
                            onClick={() => {
                                navigate("/codes")
                                closeSidebar()
                            }}
                        >
                            <img src={code} />
                            PHP base Code
                        </button>

                    </div>

                    <div className="sections">
                        <h1 className="sub">Data Structuar</h1>
                        <img src={leftarrow} />
                    </div>

                    <div className="subpart">
                        <button
                            className="phpsub"
                            onClick={() => {
                                navigate("/datastructuar")
                                closeSidebar()
                            }}
                        >
                            <img src={download} />
                            Basic theory
                        </button>
                    </div>
                </div>
            </aside>

            <main className="contentArea">
                <Routes>
                    <Route path="/intro" element={<Introduction />} />
                    <Route path="/php-installation" element={<Phpinstalation />} />
                    <Route path="/basi-cphp" element={<Basicphp />} />
                    <Route path="/codes" element={<Phpcode />} />
                    <Route path="/datastructuar" element={<Theory />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/Signsection" element={<Signsection />} />
                </Routes>
            </main>
        </>
    )
}