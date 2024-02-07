import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <h1>Page inicial</h1>
      </header>
      <section>
        {/* INICIO - Renderização das páginas */}
        <Outlet />
        {/* FIM - Renderização das páginas */}
      </section>
    </>
  );
};

export default RootLayout;
