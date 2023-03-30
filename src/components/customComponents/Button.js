import React from "react";
import Spinners from "./helpers/Spinners";

const Button = ({buttonText,isloading,callback,cssClasses}) => {
  return (
    <button className={cssClasses} type={!isloading ? "submit" : "button"} onClick={callback}>
      {!isloading ? buttonText : <>{Spinners.rotatingLines} Please Wait...</>}
    </button>
  );
};

Button.defaultProps={
    callback:()=>{}
}

export default Button;