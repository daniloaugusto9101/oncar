import React from "react";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5 md:py-10 border-t-2 flex flex-col md:flex-row items-center justify-center text-2xl gap-1">
      <p className="">desenvolvido por</p>
      <p className="flex items-center  md:text-md">
        <IoIosRocket className="text-red-700" />
        <Link
          to={"https://www.linkedin.com/in/daniloaugusto9101/"}
          className="text-blue-700  hover:underline"
          target="_blank"
        >
          <b>Danilo Augusto</b>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
