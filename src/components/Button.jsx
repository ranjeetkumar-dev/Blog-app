import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  classname = "",
  ...props
}) {
  return (
    <div
      className={`px-4 rounded-lg ${bgColor} ${textColor} ${classname}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Button;
