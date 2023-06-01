import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import FormWrapper from "../components/UI/FormWrapper";
import Input from "../components/UI/Input";
import classes from "./SignUp.module.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "../components/UI/Loading";
function SignUp() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputName, setInputName] = useState("");
  const [user, setUser] = useState<null | {}>(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlerInputName = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputName(e.target.value);
  };
  const handlerInputEmail = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputEmail(e.target.value);
  };
  const handlerInputPassword = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setInputPassword(e.target.value);
  };

  const handlerFormSubmit = async function () {
    if (
      inputName.trim() == "" ||
      inputEmail.trim() == "" ||
      inputPassword.trim() == ""
    ) {
      return;
    }

    try {
      setIsloading(true);
      const res = await createUserWithEmailAndPassword(
        auth,
        inputEmail,
        inputPassword
      );
      if (!res) throw new Error("email already exist");

      setUser(res);
    } catch (e: unknown) {
      const err = e instanceof FirebaseError;
      if (err) {
        setError(e.message);
      }
    }
    setIsloading(false);
    // setInputEmail("");
    // setInputPassword("");
    // setInputName("");
  };

  return (
    <FormWrapper>
      <Input
        type="text"
        placeholder="your name"
        onChangeHandler={handlerInputName}
        onFocus={() => setError(null)}
      />
      <Input
        type="email"
        placeholder="your email"
        onChangeHandler={handlerInputEmail}
        onFocus={() => setError(null)}
      />
      <Input
        type="text"
        placeholder="your password"
        onChangeHandler={handlerInputPassword}
        onFocus={() => setError(null)}
      />
      {error && <p className={classes.error}>{error}</p>}
      {isLoading && (
        <p className={classes.loading}>
          <Loading />
        </p>
      )}

      <Button onClick={handlerFormSubmit}>sign up</Button>
      <p className={classes["redirect"]}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </FormWrapper>
  );
}

export default SignUp;
