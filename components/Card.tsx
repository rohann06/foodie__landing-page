import Image from "next/image";
import { type } from "os";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const Card = ({ image, title }: Props) => {
  console.log(typeof image);
  return (
    <div className=" py-10 px-6 bg-yellow-50 rounded-xl shadow-lg">
      <div className=" flex flex-col justify-center items-center my-10 p-3">
        <Image src={image} height={70} width={70} alt="img" />
        <p className=" text-[30px] font-Montserrat font-bold my-10 text-[#505050]">
          {title}
        </p>
        <p className=" text-[20px] text-[#474747]">
          Lorem ipsum dolor sit amet <br /> consectetur. Maecenas orci et{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
