import React from "react";
import BtnAddCar from "../../components/BtnAddCar";
import BtnFilter from "../../components/BtnFilter";
import BtnOrder from "../../components/BtnOrder";
import BtnSearch from "../../components/BtnSearch";
import CarList from "../../components/CarList";
import Modal from "../../components/Modal";
import useFethCars from "../../hooks/useFethCars";
import { GlobalStorageCars } from "../../storage/GlobalCars";

const Home = () => {
  const { data } = useFethCars();
  if (data) {
    return (
      <GlobalStorageCars>
        <div className="h-full px-4 pt-4 pb-24">
          <Modal />
          <nav className=" px-4 py-10 flex justify-between flex-wrap">
            <BtnSearch />
            <div className="flex justify-self-center">
              <BtnFilter />
              <BtnOrder />
            </div>
            <BtnAddCar />
          </nav>
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
              <CarList cars={data} />
            </div>
          </div>
        </div>
      </GlobalStorageCars>
    );
  }
};

export default Home;
