import React from "react";
import "./Login.scss";
import { Helmet } from "react-helmet";
import LoginForm from "../../components/loginForm/LoginForm";

export default function Login() {
  return (
    <>
      <div className="login">
        <Helmet>
          <title>FinFetch | Sign In</title>
        </Helmet>
        <div className="bg-animation">
          <div className="bg-layer-3"></div>
          <div className="bg-layer-4"></div>
        </div>
        <LoginForm />
      </div>
    </>
  );
}
