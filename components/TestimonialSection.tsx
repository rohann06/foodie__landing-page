import Image from "next/image";
import React from "react";
import myimage from "../public/rohan.png";
import { GiRoundStar } from "react-icons/gi";
const TestimonialSection = () => {
  return (
    <div className=" text-center mt-[300px]">
      <p className=" text-[25px] font-semibold text-[#F4980D] font-Montserrat">
        Testimonial
      </p>
      <h1 className=" font-Montserrat font-extrabold text-[#4C4C4C] text-[60px]">
        What They Are Saying
      </h1>
      <p className=" text-[#828282] text-[25px] py-3">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>

      <div className=" mx-80 rounded-3xl bg-yellow-50 shadow-lg font-Montserrat">
        <div className=" grid justify-center my-10 px-10 py-8 ">
          <Image
            className=" mx-80"
            src={myimage}
            height={90}
            width={90}
            alt="iamge"
          />
          <p className=" text-[#515151] text-[25px] my-10 font-medium">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna
            non et elit. Dolor turpis molestie <br /> magnis facilisis at
            fringilla quam.
          </p>
          <p className=" flex justify-center gap-5 text-2xl text-[#FE9E0D]">
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
            <GiRoundStar />
          </p>
          <p className=" mt-5 text-[#1C1C1C] text-[30px] font-bold">
            Rohan Ahire
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
