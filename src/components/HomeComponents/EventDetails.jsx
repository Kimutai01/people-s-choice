import React from "react";

const EventDetails = () => {
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex items-center md:flex-row flex-col gap-2 md:justify-around justify-center bg-black p-8">
        <div className="md:w-[30%] w-[100%] bg-gradient-to-b from-white rounded-2xl flex flex-col justify-between from-30% to-black/50 h-[350px]">
          <div className="flex gap-2 p-4 flex-col">
            <p className="uppercase text-xl font-semibold">Save the Date</p>
            <div className="gap-2 flex ">
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl font-bold">12</p>
                <p>D D</p>
              </div>
              <p className="w-[1px] h-[100px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl  font-bold">12</p>
                <p>MM</p>
              </div>
              <p className="w-[1px] h-[100px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl  font-bold">12</p>
                <p>YYYY</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] p-4 text-2xl font-bold mx-auto border-4 border-[#BF8134] justify-center items-center">
            18 DAYS TO GO
          </div>
          <div className="flex flex-row  bg-white w-[80%] text-xl font-semibold mx-auto gap-2 rounded-xl text-[#BF8134] p-4 justify-center items-center">
            <p>Purchase a Ticket</p>
          </div>
        </div>

        <div className="flex  md:w-[380px] w-[300px] justify-center md:justify-start gap-4 md:items-start items-center    flex-col">
          <div className="flex w-[100%] justify-start md:gap-2 gap-8 text-white">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2   md:text-3xl text-xl  flex flex-col">
              <p>6pm - 10pm</p>
              <p className="text-xs">Time</p>
            </div>
          </div>
          <div className="flex w-[100%] justify-between md:gap-2 gap-8 text-white">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2   md:text-3xl text-xl  flex flex-col">
              <p>DUSIT PRINCESS HOTEL</p>
              <p className="text-xs">Venue</p>
            </div>
          </div>
          <div className="flex w-[100%] justify-start md:gap-2 gap-8 text-white">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2  md:text-3xl text-xl flex flex-col">
              <p>CLAUDIA NAISABWA</p>
              <p className="text-xs">Time</p>
            </div>
          </div>

          <div className="bg-white rounded-xl flex justify-center items-center gap-2 h-[57px] w-[100%]">
            <img
              src="/download.png"
              alt=""
              className="object-contain w-[30px] h-[30px]"
            />
            <p>Download Poster</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
