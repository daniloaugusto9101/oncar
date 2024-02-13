import React from "react";

export const GlobalFinance = React.createContext();

export const GlobalStorageFinance = ({ children }) => {
  const [status, setStatus] = React.useState(true);
  return (
    <GlobalFinance.Provider value={{ status, setStatus }}>
      {children}
    </GlobalFinance.Provider>
  );
};
