import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "store/slices/auth";
// import { userLogin } from "api/auth";
import Button from "components/Button/Button";
import { Loader } from "utils/Loader/Loader";
import { fieldValidation } from "helpers/validator";
import { setToast } from "store/slices/toast";
import "utils/icons/icon.css";
import "./LoginForm.css";

interface UserCredentials {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

const defaultUserCredentials: UserCredentials = {
  email: "",
  password: "",
};

const defaultError: Errors = {};

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>(
    defaultUserCredentials
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>(defaultError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isDataValid, field, msg } = fieldValidation(userCredentials);

    if (!isDataValid) {
      if (field !== undefined) {
        setErrors({ [field]: msg });
      }
      return;
    }

    setIsLoading(true);
    dispatch(setLogin({ userCredentials }));
    dispatch(
      setToast({
        status: "success",
        displayMessage: "Welcome! to your account",
      })
    );
    localStorage.setItem("userData", JSON.stringify(userCredentials));
    navigate("/dashboard");
    setErrors(defaultError);
    setIsLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field-box">
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={userCredentials.email}
          onChange={handleEmail}
          className={`input-field ${errors.email ? "error-box" : ""}`}
          placeholder="Email"
        />
        {errors.email && <span className="input-error">{errors.email}</span>}
      </div>

      <div className="password-container field-box">
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          id="password"
          onChange={handlePassword}
          type={showPassword ? "text" : "password"}
          className={`input-field ${errors.password ? "error-box" : ""}`}
          placeholder="Password"
          value={userCredentials.password}
        />
        <span
          className={`sign-in-pass ${errors.password ? "error-icon" : ""} ${
            showPassword ? "icon-eye" : "icon-eye-slash"
          }`}
          onClick={togglePasswordVisibility}
        ></span>
        {errors.password && (
          <span className="input-error">{errors.password}</span>
        )}
      </div>

      {!isLoading && (
        <Button
          type="submit"
          text="Submit"
          className="common-button field-box"
        />
      )}
      {isLoading && <Loader />}
    </form>
  );
};

export default LoginForm;
