import React from "react";

function Button({ name, bgColor, color, radius, padding, fontSize }) {
  return (
    <button
      style={{
        border:'none',
        width:'100%',
        backgroundColor: bgColor,
        color: color,
        borderRadius: radius,
        padding,
        fontSize,
      }}
    >
      {name}
    </button>
  );
}

export default Button;
