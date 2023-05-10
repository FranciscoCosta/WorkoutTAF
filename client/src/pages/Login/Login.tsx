import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {FaEye, FaEyeSlash } from 'react-icons/fa';
import { logo_black } from "../../assets";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState('password');
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleSubmit =()=> {
    console.log("submit");
  }
  const handleView = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };  

  return (
    <div className="Login">
    <div className="Login__container">
        <form onSubmit={handleSubmit}>
          <img src={logo_black} alt="logo" />
          <label htmlFor="email">
            Email
            <input
              data-testid="common_login__input-email"
              name="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </label>

          <label htmlFor="password">
            Password
            <div>
            <input
            value={password}
              data-testid="common_login__input-password"
              name="password"
              type={passwordType}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={()=> handleView()}>{passwordType==="password" ?<FaEye/> : <FaEyeSlash/>}</button>
          </div>
          </label>
          <button
          className="button__login"
            type="submit"
            disabled={!isValid}
          >
            Entrar
          </button>
          <p
            data-testid="common_login__button-register"
            type="button"
            onClick={() => navigate("/register")}
          >
            Ainda não tem conta ?
          </p>
          {error && (
            <span
              data-testid="common_login__element-invalid-email"
              className="error"
            >
              {error}
            </span>
          )}
        </form>
      </div>
  </div>
);
}

export default Login;