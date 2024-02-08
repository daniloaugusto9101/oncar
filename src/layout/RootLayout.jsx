import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* INÍCIO - Renderização das páginas */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* FIM - Renderização das páginas */}
      <Footer />
    </div>
  );
};

export default RootLayout;
