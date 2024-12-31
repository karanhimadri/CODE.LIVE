import React, { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Signup.css";
import authContext from "../../contexts/authContext/AuthContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthUserDetails } from "../../reduxStore/firebase/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { setLoginComponentState, setSignupComponentState } =
    useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthUserDetails(formData));
    navigate("/code-editor");
    setSignupComponentState(false);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginState = () => {
    setLoginComponentState(true);
    setSignupComponentState(false);
  };
  const hadleCrossBtn = () => {
    setSignupComponentState(false);
  };

  return (
    <div className="signup-container">
      <div className="cross-btn">
        <button onClick={hadleCrossBtn}>
          <RxCross1 />
        </button>
      </div>
      {/* Logo */}
      <div className="logo">
        <img src="/live-streaming.png" alt="Logo" />
      </div>

      {/* Form */}
      <div className="form-container">
        <h2>
          <b>Create an Account</b>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
          <p className="signup-footer">
            Already have an account?{" "}
            <span onClick={handleLoginState}>LogIn</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
