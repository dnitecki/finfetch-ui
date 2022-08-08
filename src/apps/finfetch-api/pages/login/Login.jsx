import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.scss";
import icon from "../../../../assets/FinFetch-icon.png";
import { useState } from "react";
import UserContext from "../../../../components/context/UserContext";
import axios from "axios";
const LOGIN_URL = "http://127.0.0.1:8000/api/login/";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setLoginStatus } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Credentials": "*",
          },
          withCredentials: true,
        }
      );
      navigate("/api/", { state: { from: location }, replace: true });
      console.log(response?.data);

      //clear state and controlled inputs
      //need value attrib on inputs for this
      setLoginStatus(true);
      setEmail("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <img className="login-icon" src={icon} alt="FinFetch.io" />
          <div className="login-header-text">Sign In</div>
        </div>
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
          <button
            className="form-button login-button"
            disabled={!pwd || !email}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
