import React from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return (
    <div>
    <button className="OperatorButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operators.value}
      </button>
    </div>
  );
};
export default OperatorButton;
