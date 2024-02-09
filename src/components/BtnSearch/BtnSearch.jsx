import { FaSearch } from "react-icons/fa";

const BtnSearch = () => {
  return (
    <div className="flex items-center gap-2 border">
      <span className="bg-blue-600 text-white text-xl p-4 rounded-s-md">
        <FaSearch className="" />
      </span>
      <input
        type="text"
        placeholder="Pesquisar..."
        className="text-xl focus:outline-none"
      />
    </div>
  );
};

export default BtnSearch;
