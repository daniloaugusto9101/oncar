import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center border p-3 gap-2 cursor-pointer "
    >
      <p className="">{text}</p>
    </button>
  );
};

export default Button;
