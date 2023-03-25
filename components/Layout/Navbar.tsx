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
        <h1 className=" text-[35px] lg:text-[45px] font-semibold text-yellow-50 lg:text-[#FE9E0D]">
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
        } absolute  lg:static justify-center w-full lg:w-auto shadow-lg lg:shadow-none bg-white lg:bg-transparent left-0 lg:flex lg:items-center lg:gap-10 lg:text-[21px] font-medium bg-transparent`}
      >
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <AiFillHome />
          </p>
          <a href="#hero">Home</a>
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <BsFillInfoCircleFill />
          </p>
          <a href="#about">About</a> 
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <RiMessage2Fill />
          </p>
          <a href="#testimonial">Testimonials</a> 
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <p className=" text-lg lg:hidden">
            <IoCallSharp />
          </p>
          <a href="#contact">Contact</a> 
        </p>
        <p className=" flex items-center gap-2 cursor-pointer py-2 px-3">
          <FiShoppingCart />
        </p>

        <button className=" bg-white text-black  px-3 py-2 lg:px-5 lg:py-3 rounded-full lg:text-[18px] mb-2">
          <a href="">Book Now</a> 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
