import React from "react";
import "./Login.scss";
import icon from "../../../../assets/FinFetch-icon-small.png";

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <img className="login-icon" src={icon} alt="FinFetch.io" />
          <div className="login-header-text">Sign In</div>
        </div>
        <div className="login-form">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
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
            required
          />
          <button
            className="form-button"
            // disabled={!validEmail || !validPwd || !validMatch ? true : false}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
