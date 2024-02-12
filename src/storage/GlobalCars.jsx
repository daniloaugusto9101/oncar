import React from "react";

export const GlobalCars = React.createContext();

export const GlobalStorageCars = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [refreshKey, setRefreshKey] = React.useState(0);

  return (
    <GlobalCars.Provider
      value={{ isOpen, setIsOpen, refreshKey, setRefreshKey }}
    >
      {children}
    </GlobalCars.Provider>
  );
};
