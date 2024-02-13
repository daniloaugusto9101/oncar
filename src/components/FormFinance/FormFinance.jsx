import React from "react";
import { GlobalFinance } from "../../storage/GlobalFinance";
import usePostFinance from "../../hooks/usePostFinance";

const FormFinance = () => {
  // const { status, setStatus } = React.useContext(GlobalFinance);
  const { postFinance } = usePostFinance();

  const [data, setData] = React.useState({
    nomeCliente: "",
    valorFinanciamento: "",
    renda: "",
  });

  const valorInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendFinance = async (e) => {
    e.preventDefault();
    console.log("Nome:", data.nomeCliente);
    console.log("Nome:", data.valorFinanciamento);
    console.log("Nome:", data.renda);
    postFinance(data);
  };

  return (
    <div className="flex gap-10 p-4">
      <form onSubmit={sendFinance} className="flex-1 p-4 mt-6 border ">
        <h2 className="text-2xl mb-10">Simular financiamento</h2>
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
              required={true}
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
                required={true}
              />
            </div>
          </div>
          <div>
            <div>
              <p className="mb-2">
                Renda
                <span className="text-red-600"> *</span>
              </p>
              <input
                type="text"
                name="renda"
                className="w-full border p-2 bg-gray-100 rounded-sm"
                onChange={valorInput}
                required={true}
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
      <div className="flex-1 p-4 mt-6 border ">
        <h2>
          Status: <span>Aprovado</span>
        </h2>
        <p>Nome: </p>
        <p>Valor do financiamento: </p>
        <p>Entrada: </p>
      </div>
    </div>
  );
};

export default FormFinance;
