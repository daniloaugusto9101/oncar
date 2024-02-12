import React from "react";

export const GlobalFinance = React.createContext();

export const GlobalStorageFinance = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <GlobalFinance.Provider
      value={{ isOpen, setIsOpen, refreshKey, setRefreshKey }}
    >
      {children}
    </GlobalFinance.Provider>
  );
};
