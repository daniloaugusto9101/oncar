import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 top-0 shadow-md h-28">
      <Logo />
      <ul className="hidden md:flex gap-10 text-xl">
        <li className="">
          <Link
            to={"/oncar"}
            className="flex items-center gap-1 hover:text-blue-700 transition-all"
          >
            <FaCar />
            Carros
          </Link>
        </li>
        <li>
          <Link
            to={"/oncar/contato"}
            className="flex items-center gap-1 hover:text-blue-700 transition-all"
          >
            <RiMoneyDollarBoxFill />
            Financiamento
          </Link>
        </li>
      </ul>
      <IoMenu className="md:hidden text-5xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;
