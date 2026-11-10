import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash, FaBoxes } from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,

          password: password,
        }),
      });

      if (response.ok) {
        const user = await response.json();

        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);

      alert("Backend not connected");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <FaBoxes className="logo-icon" />

          <h1>
            Inventory
            <span>Pro</span>
          </h1>
        </div>

        <h2>
          Manage Your Inventory
          <br />
          Smartly & Easily
        </h2>

        <p>
          Track products, manage stock, monitor sales and grow your business
          with our powerful inventory system.
        </p>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>

          <p>Login to your account</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
