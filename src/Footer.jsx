import React from "react";

const Footer = () => {
  return (
    <div className="bg-black px-4 py-8 flex flex-col gap-4 w-[100%] font-josefin">
      <div className="flex flex-row gap-5 items-center font-josefin ">
        <div className="w-[70%] hidden md:block text-white  font-bold ">
          <p className="bg-white h-[1px] w-[100%]"></p>
        </div>
        <p className="text-white font-extrabold text-3xl">CONNECT WITH US</p>
      </div>

      <div className="w-[100%] flex md:flex-row flex-col justify-between  gap-4 items-center md:items-start">
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <div className="flex gap-2 items-center">
            <img
              src="/call.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <p>2345678909853</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/mail.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <p>awards@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-6  md:gap-16 items-center">
            <img
              src="/tiktok.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/instagram.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/twitter.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/facebook.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/youtube.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
            <img
              src="/linkedin.png"
              alt=""
              className="object-contain w-[35px] h-[35px]"
            />
          </div>

          <div className="w-[100%] text-white flex md:flex-row flex-col gap-8 items-center">
            <p className="underline"> Terms and Conditions</p>
            <p className="underline">Privacy Policy</p>
            <p>People's Choice AwardsKE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
