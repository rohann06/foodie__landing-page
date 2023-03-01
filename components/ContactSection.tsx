import React from "react";

const ContactSection = () => {
  return (
    <div className=" text-center  mt-[400px]">
      <h1 className=" text-[#4C4C4C] font-Montserrat font-bold text-[60px]">
        Have Question In Mind? <br /> Let Us Help You
      </h1>

      <div>
        <div className=" flex justify-between rounded-full gap-5 my-20 bg-yellow-50 p-5 mx-80 shadow-lg">
          <input className=" bg-yellow-50 p-5 rounded-full w-[700px]" type="text" placeholder="youremail@gmail.com"/>
          <button className=" bg-[#FE9E0D] text-yellow-50 rounded-full px-10 py-3 text-xl font-Montserrat font-semibold">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
