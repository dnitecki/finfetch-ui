import React from "react";
import "./Register.scss";
import { Helmet } from "react-helmet";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

export default function Register() {
  return (
    <>
      <div className="register">
        <div className="documentation-header"></div>
        <Helmet>
          <title>FinFetch | Register</title>
        </Helmet>
        <div className="bg-animation">
          <div className="bg-layer-3"></div>
          <div className="bg-layer-4"></div>
        </div>
        <RegistrationForm />
      </div>
    </>
  );
}
