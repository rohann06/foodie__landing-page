import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

//image
import aboutbackgroundimage from "../public/about-background-image.png";

const AboutSection = () => {
  return (
    <div className=" lg:flex flex-col lg:flex-row justify-between items-center lg:mt-[450px] mt-[250px] lg:-ml-[150px]">
      <div>
        <Image
          src={aboutbackgroundimage}
          height={700}
          width={760}
          alt="image"
        />
      </div>
      <div>
        <div className=" font-Montserrat py-5">
          <p className=" text-[25px] font-semibold text-[#F4980D]">About</p>
          <h1 className=" text-[60px] font-extrabold   text-[#4C4C4C]">
            Food Is An Important <br /> Part Of A Balanced <br /> Diet
          </h1>
        </div>
        <div className=" text-[25px] text-[#828282] ">
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna
            non et elit. Dolor turpis molestie dui <br /> magnis facilisis at
            fringilla quam.
          </p>
        </div>
        <div className=" text-[25px] text-[#828282] mt-5">
          <p>
            Non tincidunt magna non et elit. Dolor turpis molestie <br /> dui
            magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className=" flex items-center gap-10 mt-5 ">
          <button className=" flex gap-2 items-center bg-[#FE9E0D] text-yellow-100 rounded-full font-semibold py-[14px] px-[45px] text-[20px]">
            Learn More
          </button>
          <p className=" text-6xl text-[#484848]">
            <AiFillPlayCircle />
          </p>
          <p className=" text-xl text-[#484848] font-semibold">Watch Now</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
