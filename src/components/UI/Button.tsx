import React from "react";
import classes from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <button
      className={classes.button}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
