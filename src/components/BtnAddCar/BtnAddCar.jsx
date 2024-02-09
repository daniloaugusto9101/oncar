import { FaPlus } from "react-icons/fa";

const BtnAddCar = () => {
  return (
    <div className="flex items-center border p-3 gap-2 cursor-pointer hover:text-white hover:bg-blue-600 rounded-sm">
      <span className=" text-xl rounded-md">
        <FaPlus />
      </span>
      <p className="">Carro</p>
    </div>
  );
};

export default BtnAddCar;
