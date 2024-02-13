import { AiOutlineDollarCircle } from "react-icons/ai";

const Btnfinance = () => {
  return (
    <div className="bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center border p-3 gap-2 cursor-pointer ">
      <span className=" text-xlrounded-md">
        <AiOutlineDollarCircle />
      </span>
      <p className="">Simular financiamento</p>
    </div>
  );
};

export default Btnfinance;
