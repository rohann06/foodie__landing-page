import Image from "next/image";
import React from "react";
import Card from "./Card";

//Image 
import hand from "./../public/choose-image.png";
import truck from "./../public/delivery-image.png";
import food from "./../public/pick-meals-image.png";

const WorkSection = () => {
  return (
    <div id="work" className=" lg:mt-[450px] mt-[150px]">
      <div className=" text-center">
        <p className=" text-[25px] font-semibold text-[#F4980D] font-Montserrat">
          Work
        </p>
        <h1 className=" font-Montserrat font-extrabold text-[#4C4C4C] text-[30px] lg:text-[60px]">
          How It Works
        </h1>
        <p className=" text-[#828282] text-[20px] lg:text-[25px] py-3">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
          et elit. Dolor turpis molestie dui <br /> magnis facilisis at
          fringilla quam.
        </p>
      </div>
      <div className=" flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-14 my-5 lg:my-10 ">
        <Card image={hand} title={"Choose How Often"} />
        <Card image={truck} title={"Fast Deliveries"} />
        <Card image={food} title={"Pick Meals"} />
      </div>
    </div>
  );
};

export default WorkSection;
