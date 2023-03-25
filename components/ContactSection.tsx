import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className=" text-center mt-[200px] lg:mt-[300px]">
      <h1 className=" text-[#4C4C4C] font-Montserrat font-bold text-[30px] lg:text-[60px]">
        Have Question In Mind? <br /> Let Us Help You
      </h1>

      
        <div className=" flex lg:justify-between rounded-full lg:gap-5 lG:my-20 bg-yellow-50 lg:p-5 lg:mx-80 shadow-lg">
          <input className=" bg-yellow-50 p-5 rounded-full lg:w-[80%]" type="text" placeholder="youremail@gmail.com"/>
          <button className=" bg-[#FE9E0D] text-yellow-50 rounded-full px-8 lg:px-10 py-3 lg:text-xl font-Montserrat font-semibold">Submit</button>
        </div>
      
    </div>
  );
};

export default ContactSection;
