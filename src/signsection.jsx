import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"


import Introduction from "./introduction.jsx"

import './intro.css'

export default function Signsection() {


	const navigate = useNavigate()
	const location = useLocation()
	const [closer, closertransform] = useState(false)
	const change = () => {
		closertransform(prev => !prev);
	}

	useEffect(() => {
	}, [location.pathname])
	return (
		<div className='signsection'>
			<div className="twobox">
				<div className="logins">
					<div className="loginin">
						<h1>Login</h1>
						<div className="inputsbox">
							<input type="email" placeholder='E-mail' />
							<input type="password" placeholder='password' />
							<button className="loginbtns" onClick={() => {
								navigate("/intro")
								closeSidebar()
							}}>Login</button>
						</div>
					</div>
				</div>
				<div className="signs">
					<div className="signin">
						<h1>Sign in</h1>
						<div className="inputsbox">
							<input type="username" placeholder='Username' />
							<input type="email" placeholder='E-mail' />
							<input type="password" placeholder='password' />
							<input type="password" placeholder='Check password' />
							<button className="loginbtns" onClick={() => {
								navigate("/intro")
								closeSidebar()
							}}>Sign in</button>
						</div>
					</div>
				</div>
				<div className={`closer ${closer ? "active" : ""}`}>
					<button className="chenger" onClick={change}>Login</button>
				</div>
			</div>
			<main className="contentArea">
				<Routes>
					<Route path="/intro" element={<Introduction />} />
				</Routes>
			</main>
		</div>

	)
}
