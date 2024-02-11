import { FaRegEdit } from "react-icons/fa";

const BtnEdit = () => {
  return (
    <div className="bg-white flex items-center border p-3 gap-2 cursor-pointer ">
      <span className=" text-xlrounded-md">
        <FaRegEdit />
      </span>
      <p className="">Editar</p>
    </div>
  );
};

export default BtnEdit;
