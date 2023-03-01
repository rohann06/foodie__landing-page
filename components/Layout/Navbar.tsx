import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className=" lg:flex lg:justify-between lg:items-center">
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
        } absolute  lg:static justify-center bg-[#FE9E0D] lg:bg-transparent w-full lg:w-auto left-0 lg:flex lg:items-center lg:gap-10 lg:text-[21px] font-medium bg-transparent`}
      >
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <AiFillHome />
          </p>
          Home
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <BsFillInfoCircleFill />
          </p>
          About
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <RiMessage2Fill />
          </p>
          Testimonials
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <IoCallSharp />
          </p>
          Contact
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
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
