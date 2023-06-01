import React from "react";
import classes from "./Input.module.scss";

interface Props {
  type: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}
function Input(props: Props) {
  return (
    <div className={classes["input__controls"]}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        onFocus={props.onFocus}
      />
      <div className={classes["input__border"]} />
    </div>
  );
}

export default Input;
