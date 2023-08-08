import React from "react";

const AboutHero = () => {
  return (
    <div className="flex justify-start items-start bg-black py-12 px-4 ">
      <div className="w-[50%] h-[563px]">
        <img
          src="/aboutpic.png"
          alt=""
          className="object-cover h-[563px] w-[100%] "
        />
      </div>

      <div className="w-[40%] pt-20 text-end px-8 text-[#FFFFFF]">
        <p>
          People's Choice Awards stands as a shining beacon of recognition,
          celebration, and empowerment, championing the extraordinary talents,
          exceptional career men, thriving businesses, and inspiring
          personalities across the African continent. With unwavering
          dedication, it illuminates the brilliance and achievements of these
          diverse individuals, uplifting them on a grand stage to honor their
          relentless pursuit of excellence, while inspiring future generations
          to dream and aspire to greatness. Our prestigious award program serves
          as a powerful catalyst, uniting communities, and fostering a spirit of
          unity, progress, and pride throughout the African continent and beyond
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
