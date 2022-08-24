import React, { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.scss";
import icon from "../../../../assets/FinFetch-icon-text.png";
import { useState } from "react";
import UserContext from "../../../../context/Context";
import { Helmet } from "react-helmet";
import { loginUser } from "../../../../requests/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Login() {
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginStatus } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    try {
      await loginUser(email, pwd);
      navigate("/api/account", { state: { from: location }, replace: true });
      setLoginStatus(true);
      setEmail("");
      setPwd("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 403) {
        setErrMsg("Invalid Email or Password");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="login">
      <Helmet>
        <title>FinFetch | Sign In</title>
      </Helmet>
      <div className="bg-animation">
        <div className="bg-layer-3"></div>
        <div className="bg-layer-4"></div>
      </div>
      <div className="login-container">
        <div className="login-header">
          <img className="login-icon" src={icon} alt="FinFetch.io" />
          <div className="login-header-text">Sign In</div>
        </div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          {isLoading ? (
            <div className="loading-horizontal">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <button className="form-button" disabled={!pwd || !email}>
              Sign In
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          )}
        </form>
        <p>
          Need an account?
          <br />
          <NavLink to="/api/register">
            <span className="line">Sign Up</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
}
