import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  return (
    <>
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="">
            <select
              {...props}
              id={id}
              className={`
                px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-50 w-full
                ${className}}`}
            >
              {options?.map((option) => (
                <options key={option} value={option}>
                  {option}
                </options>
              ))}
            </select>
          </label>
        )}
      </div>
    </>
  );
}

export default React.forwardRef(Select);
