import React, { useContext, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoginForm.scss";
import icon from "../../../../assets/FinFetch-icon-text.png";
import { useState } from "react";
import UserContext from "../../../../context/Context";
import { loginUser } from "../../../../requests/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginStatus } = useContext(UserContext);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const rememberEmail = async (checked, email) => {
    if (checked) {
      window.localStorage.setItem("email", email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    try {
      await loginUser(email, pwd);
      await rememberEmail(checked, email);
      window.localStorage.setItem("isLogged", true);
      setLoginStatus(true);
      setEmail("");
      setPwd("");
      setIsLoading(false);

      navigate("/api/account", {
        state: { from: location },
        replace: true,
      });
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
    <>
      <div className="login-container">
        <div className="login-header">
          <img className="login-icon" src={icon} alt="FinFetch.io" />
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
            className="form-input login-input"
            type="text"
            id="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input login-input"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <div className="login-checkbox">
            <input
              className="form-checkbox"
              type="checkbox"
              id="rememberMe"
              name="Remember email"
              onChange={(e) => setChecked(e.target.checked)}
            ></input>
            <label htmlFor="rememberMe" className="form-label">
              Remember Email
            </label>
          </div>
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
            <button
              className="form-button login-form-button"
              disabled={!pwd || !email}
            >
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
    </>
  );
}
