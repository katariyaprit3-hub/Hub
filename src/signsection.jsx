import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Introduction from "./introduction.jsx"
import "./intro.css"

export default function Signsection() {
  const navigate = useNavigate()

  // only for closer
  const [isLogin, setIsLogin] = useState(true)

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [signData, setSignData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  /* ================= HANDLERS ================= */

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleSignChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill all login fields")
      return
    }
    navigate("/intro")
  }

  const handleSignup = () => {
    const { username, email, password, confirmPassword } = signData

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all signup fields")
      return
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    navigate("/intro")
  }

  /* ================= UI ================= */

  return (
    <div className="signsection">
      <div className="twobox">

        {/* LOGIN */}
        <div className="logins">
          <div className="loginin">
            <h1>Login</h1>

            <div className="inputsbox">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={loginData.email}
                onChange={handleLoginChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
              />

              <button className="loginbtns" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>

        {/* SIGNUP */}
        <div className="signs">
          <div className="signin">
            <h1>Sign Up</h1>

            <div className="inputsbox">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signData.username}
                onChange={handleSignChange}
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={signData.email}
                onChange={handleSignChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signData.password}
                onChange={handleSignChange}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signData.confirmPassword}
                onChange={handleSignChange}
              />

              <button className="loginbtns" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* ONLY CLOSER CHANGES */}
        <div className={`closer ${isLogin ? "" : "active"}`}>
          <button
            className="chenger"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>

      {/* ROUTES */}
      <main className="contentArea">
        <Routes>
          <Route path="/intro" element={<Introduction />} />
        </Routes>
      </main>
    </div>
  )
}
