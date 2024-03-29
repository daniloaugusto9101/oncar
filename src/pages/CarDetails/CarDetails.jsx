import React from "react";
import { useParams } from "react-router-dom";
import useFethCarDetails from "../../hooks/useFethCarDetails";
import Btnfinance from "../../components/Btnfinance";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";

const CarDetails = () => {
  const { carId } = useParams();
  const { data: car } = useFethCarDetails(carId);

  if (car) {
    return (
      <div className="md:flex px-2">
        <div className="basis-1/2 h-96">
          <img
            src={car.img}
            className="block overflow-hidden w-full h-full object-cover"
          />
        </div>
        <div className="p-4 basis-1/2">
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-2xl">{car.modelo}</p>
            <p>{car.marca}</p>
            <div className="flex gap-5">
              <p className="flex items-center gap-1">
                <FaRegCalendarAlt />
                {car.ano}
              </p>
              <p className="flex items-center gap-1">
                <IoMdSpeedometer />
                {car.totkm} km
              </p>
            </div>
            <div>
              <p>
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Assumenda architecto atque libero. Sunt at earum,
                quibusdam totam ab nam pariatur reprehenderit. Quis deleniti
                perferendis quam rem dolorum facere perspiciatis voluptate?
              </p>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4 border-t-2">
              <p>
                R$
                <span className="text-2xl text-blue-600 font-bold">
                  {car.valor}
                </span>
              </p>
            </div>
            <div>
              <Btnfinance />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CarDetails;
