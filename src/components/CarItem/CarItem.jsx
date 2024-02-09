import React from "react";
import url from "../../assets/img/carro.webp";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  return (
    <div className="bg-white rounded-md shadow-md shadow-gray-300 overflow-hidden">
      <div>
        <img src={url} alt="Foto Cruze LT Sedan" className=" block" />
      </div>
      <div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-2xl">{car.modelo}</p>
          <p>Chevrolet</p>
          <div className="flex gap-5">
            <p className="flex items-center gap-1">
              <FaRegCalendarAlt />
              {car.ano}
            </p>
            <p className="flex items-center gap-1">
              <IoMdSpeedometer />
              {car.totKM} km
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 border-t-2">
          <p>
            R$
            <span className="text-2xl text-blue-600 font-bold">
              {car.preco}
            </span>
          </p>
          <Link
            to="/oncar/contato"
            className="font-semibold text-sm text-blue-600 border border-blue-600 px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all "
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
