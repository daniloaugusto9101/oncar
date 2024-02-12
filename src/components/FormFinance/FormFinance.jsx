import React from "react";

const FormFinance = () => {
  const [data, setData] = React.useState({
    nomeCliente: "",
    valorFinanciamento: "",
  });

  const valorInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendCar = async (e) => {
    e.preventDefault();
    // postCar(data);
  };

  return (
    <form onSubmit={sendCar}>
      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-2">
            Nome do cliente
            <span className="text-red-600"> *</span>
          </p>
          <input
            type="text"
            name="nomeCliente"
            className="w-full border p-2 bg-gray-100 rounded-sm"
            onChange={valorInput}
          />
        </div>
        <div>
          <div>
            <p className="mb-2">
              Valor do financiamento
              <span className="text-red-600"> *</span>
            </p>
            <input
              type="text"
              name="valorFinanciamento"
              className="w-full border p-2 bg-gray-100 rounded-sm"
              onChange={valorInput}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center border p-3 gap-2 cursor-pointer"
        >
          <p>Simular Financiamento</p>
        </button>
      </div>
    </form>
  );
};

export default FormFinance;
