import CarCard from "../../components/CarCard";

const Home = () => {
  return (
    <div className="flex ">
      <nav className="bg-yellow-100 flex-none w-60">
        <input type="text" placeholder="Pesquisar" className="border" />
      </nav>
      <div className="flex-1 px-4 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
