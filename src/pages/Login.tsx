import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import FormWrapper from "../components/UI/FormWrapper";
import Input from "../components/UI/Input";
import React from "react";

function Login() {
  const handlerInputEmail = function (e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  };
  const handlerInputPassword = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(e.target.value);
  };
  const handlerFormSubmit = function () {
    console.log();
  };

  return (
    <FormWrapper>
      <Input
        type="email"
        placeholder="your email"
        onChangeHandler={handlerInputEmail}
      />
      <Input
        type="text"
        placeholder="your password"
        onChangeHandler={handlerInputPassword}
      />
      <Button onClick={handlerFormSubmit}>Login</Button>
      <p className={classes["redirect"]}>
        Don't have an account? <Link to="/signup">Sign in</Link>
      </p>
    </FormWrapper>
  );
}

export default Login;
