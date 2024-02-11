import { FaPlus } from "react-icons/fa";

const BtnAddCar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="flex items-center border p-3 gap-2 cursor-pointer hover:text-white hover:bg-blue-600 rounded-sm"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className=" text-xl rounded-md">
        <FaPlus />
      </span>
      <p className="">Carro</p>
    </div>
  );
};

export default BtnAddCar;
