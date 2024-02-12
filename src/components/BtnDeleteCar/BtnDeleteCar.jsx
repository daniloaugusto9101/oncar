import { RiDeleteBin5Line } from "react-icons/ri";
import CarsServices from "../../services/CarsServices";

const BtnDeleteCar = ({ carId }) => {
  const deleteCar = async (id) => {
    try {
      const response = await CarsServices.deleteCar(id);
      return response;
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
      throw error;
    }
  };
  const handleClick = () => {
    console.log("clicou, id", carId);
    deleteCar(carId);
  };
  return (
    <div
      className=" bg-white flex items-center gap-2   border p-3 cursor-pointer text-red-600"
      onClick={() => handleClick()}
    >
      <span className=" text-xlrounded-md">
        <RiDeleteBin5Line />
      </span>
      <p className="">Deletar</p>
    </div>
  );
};

export default BtnDeleteCar;
