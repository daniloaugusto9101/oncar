import { RiDeleteBin5Line } from 'react-icons/ri';
import useDeleteCars from '../../hooks/useDeleteCars';
import useFetchCars from '../../hooks/useFetchCars';

const BtnDeleteCar = ({ carId }) => {
    const { fetchCars } = useFetchCars();
    const { delCar } = useDeleteCars();

    const handleClick = () => {
        console.log('clicou, id', carId);
        delCar(carId)
            .then(() => {
                fetchCars();
            })
            .catch((error) => {
                console.error(`Erro ao adicionar carro: ${error}`);
            });
    };
    return (
        <div
            className="flex items-center font-semibold text-sm text-red-600 border border-red-600 px-3 py-3 rounded-md hover:bg-red-600 hover:text-white transition-all cursor-pointer"
            onClick={() => handleClick()}>
            <span className=" text-xlrounded-md">
                <RiDeleteBin5Line />
            </span>
            {/* <p className="">Deletar</p> */}
        </div>
    );
};

export default BtnDeleteCar;
