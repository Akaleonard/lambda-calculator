import React from "react";
import Specials from "./Specials"


const SpecialButton = (props) => {
  return (
    <div>
      <button className="SpecialButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specials.value}
      </button>
    </div>
  );
};
export default SpecialButton;
