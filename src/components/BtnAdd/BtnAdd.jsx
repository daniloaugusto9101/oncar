import { FaPlus } from "react-icons/fa";
import { GlobalCars } from "../../storage/GlobalCars";
import React from "react";

const BtnAdd = () => {
  const { setIsOpen } = React.useContext(GlobalCars);
  return (
    <div
      className="flex items-center border p-3 gap-2 cursor-pointer hover:shadow-md"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="text-blue-600 text-xlrounded-md">
        <FaPlus />
      </span>
      <p className="">Cadastrar</p>
    </div>
  );
};

export default BtnAdd;
