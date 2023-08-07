import React from "react";
import homebg from "/homebg.png";
const Hero = () => {
  return (
    <div className="bg-black p-4">
      <div
        style={{ backgroundImage: `url(${homebg})` }}
        className="h-[100vh] bg-cover bg-no-repeat bg-center "
      >
        <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
          <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
            <div className=" w-[100%] flex flex-col justify-center items-center text-white text-6xl font-bold">
              <p>PEOPLE'S CHOICE AWARDS</p>
              <p>. . .</p>
              <p>2023</p>
            </div>
            <p className="text-white">
              African Brilliance Unveiled: Celebrating Talents, Careers,
              Businesses & Personalitie
            </p>
            <div className="flex justify-center items-center ">
              <p className="bg-white h-[4px] w-[100px]"></p>
              <p className="bg-black h-[4px] w-[500px]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
