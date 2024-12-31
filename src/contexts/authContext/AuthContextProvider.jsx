import React, { useState } from "react";
import authContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [loginComponentState, setLoginComponentState] = useState(false);
  const [signupComponentState, setSignupComponentState] = useState(false);
  const [name, setName] = useState("HELLO");

  return (
    <authContext.Provider
      value={{
        name,
        loginComponentState,
        signupComponentState,
        setLoginComponentState,
        setSignupComponentState,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
