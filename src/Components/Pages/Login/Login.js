import React from "react"
import LoginLogo from "../../assets/login.svg"
import "./login.css"
const Login = () => {
  return (
    <div className="defaultHeader">
      <div className="loginrooter">
        <div className="loginImage">
          <img src={LoginLogo} alt="" className="loginImg" />
        </div>
        <div className="form ">
          {/* for Login  */}
          <form action="">
            <h2 className="logHeading">hello User</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Login</button>
          </form>
          {/* for Login  */}
        </div>
      </div>
    </div>
  )
}

export default Login
