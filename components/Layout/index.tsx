import Image from "next/image";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import herobackground from "../../public/Assets/home-banner-background.png";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <div className=" lg:mx-[5%] mx-[2%] mt-[2%] font-Reem-Kufi">
      <Navbar />
      <div className=" absolute top-0 right-0 -z-20">
        <Image src={herobackground} height={720} width={630} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
