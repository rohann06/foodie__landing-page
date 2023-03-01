import Image from 'next/image'
import React from 'react'
import herobackgroundimage from "../public/Assets/home-banner-image.png";
import { ImArrowRight2 } from "react-icons/im";

const HeroSection = () => {
  return (
    <div className=" lg:flex flex-col-reverse lg:flex-row justify-between items-center mt-10">
          <div>
            <div className=" text-[60px] font-extrabold  font-Montserrat text-[#4C4C4C] py-5">
              <h1>
                Your Favourite Food <br /> Delivered Hot & <br /> Fresh
              </h1>
            </div>
            <div className=" text-[25px] text-[#828282] ">
              <p>
                Healthy switcher chefs do all the prep work, like <br />{" "}
                peeding, chopping & marinating, so you can cook <br /> a fresh
                food.
              </p>
            </div>
            <div className=" mt-5 ">
              <button className=" flex gap-2 items-center bg-[#FE9E0D] text-yellow-100 rounded-full font-semibold py-[14px] px-[45px] text-[20px]">
                Order Now
                <p>
                  <ImArrowRight2 />
                </p>
              </button>
            </div>
          </div>
          <div>
            <Image
              src={herobackgroundimage}
              height={700}
              width={760}
              alt="image"
            />
          </div>
        </div>
  )
}

export default HeroSection