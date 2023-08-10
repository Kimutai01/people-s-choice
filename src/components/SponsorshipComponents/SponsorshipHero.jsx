import React from "react";

const SponsorshipHero = () => {
  return (
    <div className="bg-black gap-4 flex flex-col">
      <div className="flex justify-between items-center w-[100%]">
        <div className="w-[70%]">
          <p className="bg-white h-[2px] w-[100%] " />
        </div>
        <p className="text-3xl  text-white">SPONSORSHIPS</p>
      </div>

      <div className="flex justify-between md:flex-row flex-col items-start bg-black py-12 px-4 ">
        <div className="md:w-[50%] w-[100%] h-[563px]">
          <img
            src="/aboutpic.png"
            alt=""
            className="object-cover h-[563px] w-[100%] "
          />
        </div>

        <div className="md:w-[40%] w-[100%] md:pt-20 pt-8 flex flex-col gap-4 text-end px-4 text-[#FFFFFF]">
          <p>
            Our work with our sponsors is at the forefront of honoring
            extraordinary talents, exceptional career men, thriving businesses,
            and inspiring personalities who have left an indelible mark on their
            communities.
          </p>
          <p>
            By associating with our prestigious award program, our sponsors
            align their brands with the values of unity, progress, and pride
            that resonate not only throughout Africa but across the globe.
          </p>

          <div className="flex justify-center  items-center gap-12">
            <div className="flex flex-col gap-2">
              <img
                src="/tamasha.png"
                className="h-[130px] w-[130px] object-contain"
                alt=""
              />
              <p>Social Market Vms</p>
            </div>

            <div className="flex flex-col gap-2">
              <img
                src="/tamasha.png"
                className="h-[130px] w-[130px] object-contain"
                alt=""
              />
              <p>Social Market Vms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipHero;
