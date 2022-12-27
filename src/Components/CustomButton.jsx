import React from "react";

export const CustomButton = ({ color, label, onClick }) => {
  return (
    <button
      className={"px-4 py-3 rounded-md text-white" + (color ? " " + color : " bg-red-400") }
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("Pls enter an onclick  function to the button");
            }
      }
    >
      {label ? label : "Placeholder"}
    </button>
  );
};
