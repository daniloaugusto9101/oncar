import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <h1>Bem vindo a nossa aplicação de filme</h1>
        <ul>
          <li>
            <Link to={"/oncar"}>Home</Link>
          </li>
          <li>
            <Link to={"/oncar/contato"}>Contato</Link>
          </li>
        </ul>
      </header>
      {/* INÍCIO - Renderização das páginas */}
      <Outlet />
      {/* FIM - Renderização das páginas */}
      <footer></footer>
    </>
  );
};

export default RootLayout;
