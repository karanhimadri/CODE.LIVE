import React, { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Login.css";
import authContext from "../../contexts/authContext/AuthContext";
import { setAuthUserDetails } from "../../reduxStore/firebase/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoginComponentState, setSignupComponentState } =
    useContext(authContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    dispatch(setAuthUserDetails(formData));
    navigate("/code-editor");
    setLoginComponentState(false);
  };

  const handleSignUpState = () => {
    setSignupComponentState(true);
    setLoginComponentState(false);
  };

  const handleCrossBtn = () => {
    setLoginComponentState(false);
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="cross-btn">
          <button onClick={handleCrossBtn}>
            <RxCross1 />
          </button>
        </div>
        {/* Logo Section */}
        <div className="logo-container">
          <img
            src="/live-streaming.png"
            alt="codeLIVE Logo"
            className="company-logo"
          />
        </div>
        {/* Title */}
        <h1 className="login-title">Welcome to codeLIVE</h1>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="login-footer">
          Don't have an account?{" "}
          <span onClick={handleSignUpState}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
