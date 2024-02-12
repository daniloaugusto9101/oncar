import React from "react";
import FormFinance from "../../components/FormFinance/FormFinance";

const Finance = () => {
  return (
    <div className="p-4 mt-6 max-w-3xl m-auto border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Simulação de financiamento</h2>
      </div>
      <FormFinance />
    </div>
  );
};

export default Finance;
