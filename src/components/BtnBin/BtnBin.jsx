import { RiDeleteBin5Line } from "react-icons/ri";

const BtnBin = () => {
  return (
    <div className="bg-white flex items-center border p-3 gap-2 cursor-pointer text-red-600">
      <span className=" text-xlrounded-md">
        <RiDeleteBin5Line />
      </span>
      <p className="">Deletar</p>
    </div>
  );
};

export default BtnBin;
