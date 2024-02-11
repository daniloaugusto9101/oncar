import React from "react";

const Input = ({ text, type }) => {
  return (
    <div>
      <p className="mb-2">
        {text}
        <span className="text-red-600"> *</span>
      </p>
      <input
        type={type}
        className="w-full border p-2 bg-gray-100 rounded-sm"
        required="true"
      />
    </div>
  );
};

export default Input;
