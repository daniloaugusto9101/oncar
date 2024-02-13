import React from "react";

export const GlobalCars = React.createContext();

export const GlobalStorageCars = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cars, setCars] = React.useState([]);
  return (
    <GlobalCars.Provider value={{ isOpen, setIsOpen, cars, setCars }}>
      {children}
    </GlobalCars.Provider>
  );
};
