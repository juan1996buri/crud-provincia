import React from "react";

const Button = ({ title, background, color, action }) => {
  return (
    <button
      onClick={action}
      className={`w-[5rem] p-2 rounded-lg ${background} hover:scale-105 hover:shadow-2xl`}
      style={{ color }}>
      {title}
    </button>
  );
};

export default Button;
