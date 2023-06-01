import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
// import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

interface Error {
  error: string;
}

export const logInWithEmailAndPassword = async function (
  email: string,
  password: string
) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
    }
  }
};

export const registerWithEmailAndPassword = async function (
  email: string,
  password: string
  // name: string
) {};
