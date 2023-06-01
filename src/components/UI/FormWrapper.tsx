import React from "react";
import classes from "./FormWrapper.module.scss";

interface Props {
  children: React.ReactNode;
}
function FormWrapper(props: Props) {
  return (
    <div className={classes.form}>
      <form className={classes["form__container"]}>{props.children}</form>
    </div>
  );
}

export default FormWrapper;
