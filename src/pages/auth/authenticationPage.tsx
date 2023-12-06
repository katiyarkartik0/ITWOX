import React from "react";

import LoginForm from "pages/auth/login/LoginForm";

import "./authentication.css";

const AuthenticationPage: React.FC = () => {
  return (
    <>
      <div className="form-box">
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
