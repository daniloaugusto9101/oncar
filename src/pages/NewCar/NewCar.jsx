import React from "react";
import FormModal from "../../components/FormModal/FormModal";

const NewCar = () => {
  return (
    <div className="p-4 mt-6 max-w-3xl m-auto border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Cadastrar carro</h2>
      </div>
      <FormModal />
    </div>
  );
};

export default NewCar;
