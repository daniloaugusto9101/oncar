import React from "react";
import FormFinance from "../../components/FormFinance/FormFinance";
import { GlobalStorageFinance } from "../../storage/GlobalFinance";

const Finance = () => {
  return (
    <GlobalStorageFinance>
      <FormFinance />
    </GlobalStorageFinance>
  );
};

export default Finance;
