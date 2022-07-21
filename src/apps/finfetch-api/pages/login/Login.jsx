import React from "react";
import "./Login.scss";
import icon from "../../../../assets/FinFetch-icon-small.png";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(false);
  const [pwd, setPwd] = useState(false);

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
            onChange={(e) => setEmail(true)}
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
            onChange={(e) => setPwd(true)}
            required
          />
          <button
            className="form-button login-button"
            disabled={!pwd || !email}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
