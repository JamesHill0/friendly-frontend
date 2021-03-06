import React from "react";

function Input({ children, ...props }) {
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
      {...props}
    >
      {children}
    </input>
  );
}

export default Input;
