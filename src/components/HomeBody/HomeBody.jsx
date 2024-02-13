import React from "react";
import BtnFilter from "../../components/BtnFilter";
import BtnOrder from "../../components/BtnOrder";
import BtnSearch from "../../components/BtnSearch";
import CarList from "../../components/CarList";
import Modal from "../Modal/Modal";
import { GlobalCars } from "../../storage/GlobalCars";
import useFetchCars from "../../hooks/useFetchCars";
import BtnAdd from "../BtnAdd";

const HomeBody = () => {
  const { cars } = useFetchCars();
  const { isOpen } = React.useContext(GlobalCars);
  return (
    <>
      {isOpen && <Modal />}
      <div className="h-full px-4 pt-4 pb-24">
        <nav className=" px-4 py-10 flex justify-between flex-wrap">
          <BtnSearch />
          <div className="flex justify-self-center">
            <BtnFilter />
            <BtnOrder />
          </div>
          <BtnAdd />
        </nav>
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {cars && <CarList cars={cars} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
