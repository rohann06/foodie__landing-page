import React from "react";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className=" flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-10 pt-40 pb-32">
      <div>
        <h1 className=" text-[27px] lg:text-[35px] text-[#303030]">FOODIE</h1>
        <div className=" flex items-center gap-5 text-[#585858] lg:text-4xl text-2xl mt-5">
          <BsTwitter />
          <BsLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className=" flex lg:gap-40 gap-7 text-[15px] lg:text-[20px] font-Montserrat font-semibold text-[#4C4C4C]">
        <div>
          <p>Quality</p>
          <p>Help</p>
          <p>Share</p>
          <p>Carrers</p>
          <p>Work</p>
          <p>Testimonials</p>
        </div>
        <div>
          <p>244-5333-7783</p>
          <p>hello@food.com</p>
          <p>press@food.com</p>
          <p>contact@food.com</p>
        </div>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
