import React, { useContext } from "react";
import "./Authpage.css";
import authContext from "../../contexts/authContext/AuthContext";
import Signup from "../../components/SignUp/Signup";
import Login from "../../components/LogIn/Login";

const Authpage = () => {
  const { signupComponentState, loginComponentState } = useContext(authContext);

  return (
    <div className="authpage-container">
      {signupComponentState && (
        <div className="overlays">
          <div className="component">
            <Signup />
          </div>
        </div>
      )}
      {loginComponentState && (
        <div className="overlays">
          <div className="component">
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Authpage;
