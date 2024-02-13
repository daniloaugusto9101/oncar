import React from "react";
import HomeBody from "../../components/HomeBody";

import { GlobalStorageCars } from "../../storage/GlobalCars";

const Home = () => {
  return (
    <GlobalStorageCars>
      <HomeBody />
    </GlobalStorageCars>
  );
};

export default Home;
