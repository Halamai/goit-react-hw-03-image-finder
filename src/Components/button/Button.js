import React from "react";
import s from "./Button.module.css";

const Button = ({ onHandleonClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onHandleonClick}>
      Load more
    </button>
  );
};

export default Button;
