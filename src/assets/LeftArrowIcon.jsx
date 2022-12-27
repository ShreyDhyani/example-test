import React from "react";

const LeftArrowIcon = ({
  width = 20,
  height = 20,
  color,
  callback = () => {
    console.log("NO Callback Passed");
  },
}) => {
  return (
    <svg
      className={
        "cursor-pointer " +
        (color ? " " + color : "hover:text-gray-500 text-[#b2b2b2]")
      }
      onClick={callback}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      transform="rotate(180)"
      viewBox="0 0 14 14"
    >
      <path
        stroke={"currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M1 6.833h11.667m0 0L6.833 1m5.834 5.833l-5.834 5.834"
      ></path>
    </svg>
  );
};

export default LeftArrowIcon;
