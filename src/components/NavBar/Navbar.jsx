import React, { useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import authContext from "../../contexts/authContext/AuthContext";
import { useSelector } from "react-redux";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Navbar = () => {
  const { setLoginComponentState, setSignupComponentState } =
    useContext(authContext);
  const { userDetails } = useSelector((store) => store.auth_store);

  // Derived state for login check
  const checkLogin =
    userDetails.email && userDetails.email !== "unknown@gmail.com";

  const handleLogInBtn = () => {
    setSignupComponentState(false);
    setLoginComponentState(true);
  };

  const handleSignUpBtn = () => {
    setSignupComponentState(true);
    setLoginComponentState(false);
  };

  return (
    <div className="navbar-container">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <div className="col-md-3 mb-2 mb-md-0 navbar-holder">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none logo"
            >
              <div className="logo-holder">
                <img src="/live-streaming.png" alt="logo" />
              </div>
              <div>
                <h3 style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                  Code.<span style={{ color: "red" }}>LIVE</span>
                </h3>
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Build Faster Together !
                  </span>
                </p>
              </div>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 hk-nav-gesture">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "active-links" : ""} nav-link px-2`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feaures"
                className={({ isActive }) =>
                  `${isActive ? "active-links" : ""} nav-link px-2`
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/codelive-pricing"
                className={({ isActive }) =>
                  `${isActive ? "active-links" : ""} nav-link px-2`
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `${isActive ? "active-links" : ""} nav-link px-2`
                }
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "active-links" : ""} nav-link px-2`
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="col-md-3 text-end navber-buttons">
            {checkLogin ? (
              <div className="verified">
                <RiVerifiedBadgeFill />
                <p>{userDetails.email}</p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary me-2 login-btn"
                  onClick={handleLogInBtn}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-primary signup-btns"
                  onClick={handleSignUpBtn}
                >
                  Sign-up
                </button>
                <div>
                  <button
                    style={{ marginLeft: "6px" }}
                    type="button"
                    className="btn btn-secondary three-bar"
                  >
                    <VscThreeBars />
                  </button>
                </div>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
