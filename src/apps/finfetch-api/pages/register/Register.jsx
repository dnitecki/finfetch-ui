import React from "react";
import "./Register.scss";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import icon from "../../../../assets/FinFetch-icon.png";
import { Helmet } from "react-helmet";
import { validators } from "../../../../regex/Regex";
import { registerUser } from "../../../../requests/Requests";

const EMAIL_REGEX = validators.email;
const PWD_REGEX = validators.password;

export default function Register() {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await registerUser(email, pwd);
      setSuccess(true);
      setEmail("");
      setPwd("");
      setMatchPwd("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 500) {
        setErrMsg("Email Already Exists");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="register">
      <Helmet>
        <title>FinFetch | Register</title>
      </Helmet>
      <div className="bg-animation">
        <div className="bg-layer-3"></div>
        <div className="bg-layer-4"></div>
      </div>
      {success ? (
        <div className="register-container">
          <div className="register-header">
            <img className="register-icon" src={icon} alt="FinFetch.io" />
            <div className="register-header-text">
              Your account has been created!{" "}
            </div>
            <p>
              Please verify your account by clicking the activation link that
              has been send to your email.
            </p>
            <NavLink to="/api/login">
              <p className="line">Sign In</p>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="register-container">
          <div className="register-header">
            <img className="register-icon" src={icon} alt="FinFetch.io" />

            <div className="register-header-text">Register</div>
          </div>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className="register-form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="email">
              Email:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "register-valid" : "register-hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validEmail || !email ? "register-hide" : "register-invalid"
                }
              />
            </label>
            <input
              className="form-input"
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be a valid email.
            </p>

            <label className="form-label" htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "register-valid" : "register-hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPwd || !pwd ? "register-hide" : "register-invalid"
                }
              />
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label className="form-label" htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatch && matchPwd ? "register-valid" : "register-hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !matchPwd ? "register-hide" : "register-invalid"
                }
              />
            </label>
            <input
              className="form-input"
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
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
                className="form-button"
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
                }
              >
                Sign Up
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            )}
          </form>
          <p>
            Already registered?
            <br />
            <NavLink to="/api/login">
              <span className="line">Sign In</span>
            </NavLink>
          </p>
        </div>
      )}
    </div>
  );
}
