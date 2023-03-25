import Image from "next/image";
import React from "react";
import myimage from "../public/rohan.png";
import { GiRoundStar } from "react-icons/gi";
const TestimonialSection = () => {
  return (
    <div id="testimonial" className=" text-center lg:mt-[450px] mt-[150px]">
      <p className="  text-[25px] font-semibold text-[#F4980D] font-Montserrat">
        Testimonial
      </p>
      <h1 className=" font-Montserrat font-extrabold text-[#4C4C4C] text-[30px] lg:text-[60px]">
        What They Are Saying
      </h1>
      <p className=" text-[#828282] text-[20px] lg:text-[25px] py-3">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>

      <div className=" bg-yellow-50 rounded-3xl shadow-lg font-Montserrat flex flex-col justify-center items-center lg:mx-80 lg:my-10  lg:px-10 lg:py-8 ">
        <Image
        className="my-5"
          src={myimage}
          height={90}
          width={90}
          alt="iamge"
        />
        <p className=" text-[#515151] text-[20px] lg:text-[25px] lg:my-10 my-5 font-medium">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
          et elit. Dolor turpis molestie <br /> magnis facilisis at fringilla
          quam.
        </p>
        <p className=" flex justify-center gap-5 text-xl lg:text-2xl text-[#FE9E0D]">
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
          <GiRoundStar />
        </p>
        <p className=" my-5 text-[#1C1C1C] text-[30px] font-bold">
          Rohan Ahire
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection;
