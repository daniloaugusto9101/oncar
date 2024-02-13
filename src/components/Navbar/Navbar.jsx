import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 top-0 shadow-md h-28 mb-2">
      <Logo />
      <ul className="flex gap-6 text-xl">
        <li className="">
          <Link
            to={"/oncar"}
            className="flex items-center gap-1 hover:text-blue-700 transition-all"
          >
            <FaCar />
            Carros
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
