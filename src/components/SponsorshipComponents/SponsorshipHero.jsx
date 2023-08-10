import React from "react";

const SponsorshipHero = () => {
  return (
    <div className="bg-black gap-4 flex flex-col font-josefin">
      <div className="flex gap-10 mt-5 mx-10 items-center">
        <div className="md:w-[70%]">
          <p className="bg-white h-[2px] " />
        </div>
        <p className="text-3xl font-extrabold  text-white">SPONSORSHIPS</p>
      </div>

      {/* <div className="flex justify-between md:flex-row flex-col items-start bg-black py-12 px-4 ">
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
      </div> */}
      <div className="flex md:flex-row flex-col  py-12 px-10 rounded-t-3xl h-[100%] gap-10  ">
        <div
          className="bg-cover bg-no-repeat bg-center h-[397px] flex  justify-center items-end  w-[100%] rounded-t-3xl"
          style={{ backgroundImage: `url(/clau.jpg)` }}
        >
          <div className="flex justify-center items-end h-[100%] w-[100%] rounded-t-3xl bg-gradient-to-b from-[#BF8134] to-black/50">
            <p className=" text-3xl md:text-5xl font-extrabold uppercase text-white/80 font-josefin">
              Our sponsors
            </p>
          </div>
        </div>
        <div className=" w-[100%] md:pt-5 pt-8 flex flex-col gap-4  px-4 text-[#FFFFFF]">
          <p>
            Our work with our sponsors is at the forefront of honoring
            extraordinary talents, exceptional career men, thriving businesses,
            and inspiring personalities who have left an indelible mark on their
            communities. By associating with our prestigious award program, our
            sponsors align their brands with the values of unity, progress, and
            pride that resonate not only throughout Africa but across the globe.
          </p>

          <div className="flex   items-center gap-12">
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
              <p>Tamasha Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipHero;
