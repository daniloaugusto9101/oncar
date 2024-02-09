import React from "react";
import { FaFilter } from "react-icons/fa";

const BtnFilter = () => {
  return (
    <div className="flex items-center border p-3 gap-2 cursor-pointer">
      <span className="text-blue-600 text-xlrounded-md">
        <FaFilter />
      </span>
      <p className="">Filtar</p>
    </div>
  );
};

export default BtnFilter;
