import React from "react";

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-4 bg-black">
      <div className="flex gap-5 font-josefin mt-10 items-center w-[100%]">
        <div className="md:w-[75%] mx-10">
          <p className="bg-white h-[1px] w-[100%] " />
        </div>
        <p className="text-4xl uppercase text-white">About Us</p>
      </div>

      <div className="flex font-josefin gap-10 md:flex-row mx-5 flex-col  items-start bg-black py-12 px-4 ">
        <div
          className="bg-cover bg-no-repeat bg-center md:w-[50%] h-[563px]   flex  justify-center items-end  w-[100%] rounded-t-3xl"
          style={{ backgroundImage: `url(/clau.jpg)` }}
        >
          <div className="flex justify-center items-end h-[100%] w-[100%] rounded-t-3xl bg-gradient-to-b from-[#BF8134] to-black/50">
            <p className=" text-3xl md:text-5xl font-extrabold uppercase text-white/80 font-josefin">
              About Us
            </p>
          </div>
        </div>

        <div className="md:w-[40%] md:pt-20 pt-8  md:px-8 px-4 text-[#FFFFFF]">
          <p>
            People's Choice Awards stands as a shining beacon of recognition,
            celebration, and empowerment, championing the extraordinary talents,
            exceptional career men, thriving businesses, and inspiring
            personalities across the African continent. With unwavering
            dedication, it illuminates the brilliance and achievements of these
            diverse individuals, uplifting them on a grand stage to honor their
            relentless pursuit of excellence, while inspiring future generations
            to dream and aspire to greatness. Our prestigious award program
            serves as a powerful catalyst, uniting communities, and fostering a
            spirit of unity, progress, and pride throughout the African
            continent and beyond
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
