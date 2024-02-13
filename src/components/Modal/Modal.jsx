import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import FormModal from "../FormModal/FormModal";
import { GlobalCars } from "../../storage/GlobalCars";

const Modal = () => {
  const { isOpen, setIsOpen } = React.useContext(GlobalCars);
  if (isOpen) {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black flex justify-center items-center bg-opacity-85">
        <div className="bg-white fixed p-8 rounded-md min-w-80">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Cadastrar carro</h2>
            <AiFillCloseSquare
              className="text-xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <FormModal />
        </div>
      </div>
    );
  }
};

export default Modal;
