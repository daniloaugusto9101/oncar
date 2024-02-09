import { FaSortAmountDownAlt } from "react-icons/fa";

const BtnOder = () => {
  return (
    <div className="flex items-center border p-3 gap-2 cursor-pointer">
      <span className="text-blue-600 text-xlrounded-md">
        <FaSortAmountDownAlt />
      </span>
      <p className="">Ordernar</p>
    </div>
  );
};

export default BtnOder;
