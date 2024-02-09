import useFethCars from "../../hooks/useFethCars";

const Contact = () => {
  const cars = useFethCars();
  return (
    <main>
      <h1>Contact</h1>
      {cars.map((obj, i) => (
        <p key={i}>{obj.title}</p>
      ))}
    </main>
  );
};

export default Contact;
