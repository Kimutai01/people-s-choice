import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const EventDetails = () => {
  return (
    <div className="border-b-[#BF8134] font-josefin  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
     
      <div className="flex items-center md:flex-row flex-col gap-2 md:justify-around justify-center bg-black p-8">
        <div className="md:w-[30%] w-[100%] bg-gradient-to-b from-white rounded-2xl flex flex-col justify-between from-30% to-black/50 h-[350px]">
          <div className="flex  gap-2 p-4 flex-col">
            <p className="uppercase text-xl text-center font-semibold">
              Save the Date
            </p>
            <div className="gap-2 flex justify-center ">
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl font-bold">14</p>
                <p>D D</p>
              </div>
              <p className="w-[1px] h-[100px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl  font-bold">10</p>
                <p>MM</p>
              </div>
              <p className="w-[1px] h-[100px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-7xl  font-bold">23</p>
                <p>YYYY</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] p-4 text-2xl font-bold mx-auto border-4 border-[#BF8134] justify-center items-center">
            JOIN US
          </div>
          <div className="flex flex-row  bg-white w-[80%] text-xl font-semibold mx-auto gap-2 rounded-xl text-[#BF8134] p-4 justify-center items-center">
            <p
              className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]"
              onClick={() => {
                toast.warning(
                  "Tickets will be available for purchase from 1st September 2023",
                  {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  }
                );
              }}
            >
              Buy Tickets
            </p>
          </div>
        </div>

        <div className="flex  md:w-[380px] mt-10 w-[300px] justify-center md:justify-start gap-4 md:items-start items-center    flex-col">
          <div className="flex w-[100%] justify-start md:gap-2 gap-8 text-white">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2   md:text-3xl text-xl  flex flex-col">
              <p className="font-bold">3pm - 10pm</p>
              <p className="text-xs">Time</p>
            </div>
          </div>
          <div className="flex w-[100%] justify-start md:gap-2 gap-8 text-white">
            <img
              src="/Vector10.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2   md:text-3xl text-xl  flex flex-col">
              <p className="font-bold">Nairobi Film Center</p>
              <p className="text-xs">Venue</p>
            </div>
          </div>
          <div className="flex w-[100%] justify-start md:gap-2 gap-8 text-white">
            <img
              src="/Vector11.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <div className="gap-2  md:text-3xl text-xl flex flex-col">
              <p className="font-bold">Claudia Naisabwa</p>
              <p className="text-xs">Host</p>
            </div>
          </div>

          <a
            href="/eventposter.png"
            download
            className="bg-white mt-5 text-2xl rounded-xl flex justify-center hover:scale-105 transition-all ease-in-out duration-500 items-center gap-2 h-[57px] w-[100%]"
          >
            <img
              src="/download.png"
              alt=""
              className="object-contain w-[30px] h-[30px]"
            />
            Download the Poster
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
