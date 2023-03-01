import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className=" lg:flex lg:justify-between gap-10 lg:items-center">
      <div className=" flex justify-between items-center">
        <h1 className=" text-[35px] lg:text-[45px] font-semibold text-[#FE9E0D]">
          FOODIE
        </h1>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className=" text-2xl lg:hidden bg-[#FE9E0D] p-3 rounded-full"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className={`${
          navOpen ? "block" : "hidden"
        } absolute  lg:static justify-center bg-[#FE9E0D] lg:bg-inherit w-full lg:w-auto left-0 lg:flex lg:items-center lg:gap-10 lg:text-[21px] font-medium`}
      >
        <p className=" py-2 px-3">Home</p>
        <p className=" py-2 px-3">About</p>
        <p className=" py-2 px-3">Testimonials</p>
        <p className=" py-2 px-3">Contact</p>
        <p className=" py-2 px-3">
          <FiShoppingCart />
        </p>

        <button className=" bg-white text-black  px-3 py-2 lg:px-5 lg:py-3 rounded-full lg:text-[18px] mb-2">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
