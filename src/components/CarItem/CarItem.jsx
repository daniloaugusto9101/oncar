import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import BtnDelete from "../BtnDelete";

const CarItem = ({ car }) => {
  return (
    <div className="bg-white rounded-md shadow-md shadow-gray-300 overflow-hidden">
      <div className="h-48">
        <img
          src={car.img}
          className="block overflow-hidden w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="p-4 min-h-40 flex flex-col gap-2">
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
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 border-t-2">
          <p>
            R$
            <span className="ml-2 text-2xl text-blue-600 font-bold">
              {car.valor}
            </span>
          </p>
          <div className="flex gap-2">
            <BtnDelete carId={car.id} />
            <Link
              to={`/oncar/car/${car.id}`}
              className=" flex items-center font-semibold text-sm text-blue-600 border border-blue-600 px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all "
            >
              Ver mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
