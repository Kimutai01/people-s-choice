import React from "react";

const Footer = () => {
  return (
    <div className="bg-black px-4 py-8 flex flex-col w-[100%]">
      <div className="flex flex-row justify-between items-center ">
        <div className="w-[70%] text-white  font-bold ">
          <p className="bg-white h-[2px] w-[100%]"></p>
        </div>
        <p className="text-white  text-4xl">CONNECT WITH US</p>
      </div>

      <div className="w-[100%] flex justify-between  items-start">
        <div className="flex flex-col text-white gap-4">
          <div className="flex gap-2 items-center">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <p>2345678909853</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <p>2345678909853</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex  gap-8 items-center">
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/time.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
          </div>

          <div className="w-[100%] text-white flex justify-between items-center">
            <p>guhijokp</p>
            <p>guhijokp</p>
            <p>guhijokp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
