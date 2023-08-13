import React, { useRef, useState } from "react";
import homebg from "/clau.jpg";
import slide1 from "/slide1.jpg";
import slide2 from "/slide2.jpg";
import slide3 from "/slide3.jpg";
import slide4 from "/slide4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="bg-black p-4"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${homebg})` }}
            className="h-[100vh] bg-cover bg-no-repeat bg-center font-josefin "
          >
            <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
              <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
                <div className=" w-[100%] flex text-center flex-col justify-center items-center text-white text-5xl font-extrabold font-josefin">
                  <p className="">PEOPLE'S CHOICE AWARDS</p>
                  <p>. . .</p>
                  <p>2023</p>
                </div>
                <p className="text-white text-center ">
                  African Brilliance Unveiled: Celebrating Talents, Careers,
                  Businesses & Personalities.
                </p>
                <div className="flex justify-center md:w-[50%] w-[80%] items-center ">
                  <p className="bg-white h-[4px] w-[20%]"></p>
                  <p className="bg-black h-[4px] w-[80%]"></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide1})` }}
            className="h-[100vh] bg-cover bg-no-repeat bg-center font-josefin "
          >
            <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
              <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
                <div className=" w-[100%] flex text-center flex-col justify-center items-center text-white text-5xl font-extrabold font-josefin">
                  <p className="">PEOPLE'S CHOICE AWARDS</p>
                  <p>. . .</p>
                  <p>2023</p>
                </div>
                <p className="text-white text-center ">
                  African Brilliance Unveiled: Celebrating Talents, Careers,
                  Businesses & Personalities.
                </p>
                <div className="flex justify-center md:w-[50%] w-[80%] items-center ">
                  <p className="bg-white h-[4px] w-[20%]"></p>
                  <p className="bg-black h-[4px] w-[80%]"></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide2})` }}
            className="h-[100vh] bg-cover bg-no-repeat bg-center font-josefin "
          >
            <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
              <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
                <div className=" w-[100%] flex text-center flex-col justify-center items-center text-white text-5xl font-extrabold font-josefin">
                  <p className="">PEOPLE'S CHOICE AWARDS</p>
                  <p>. . .</p>
                  <p>2023</p>
                </div>
                <p className="text-white text-center ">
                  African Brilliance Unveiled: Celebrating Talents, Careers,
                  Businesses & Personalities.
                </p>
                <div className="flex justify-center md:w-[50%] w-[80%] items-center ">
                  <p className="bg-white h-[4px] w-[20%]"></p>
                  <p className="bg-black h-[4px] w-[80%]"></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide3})` }}
            className="h-[100vh] bg-cover bg-no-repeat bg-center font-josefin "
          >
            <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
              <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
                <div className=" w-[100%] flex text-center flex-col justify-center items-center text-white text-5xl font-extrabold font-josefin">
                  <p className="">PEOPLE'S CHOICE AWARDS</p>
                  <p>. . .</p>
                  <p>2023</p>
                </div>
                <p className="text-white text-center ">
                  African Brilliance Unveiled: Celebrating Talents, Careers,
                  Businesses & Personalities.
                </p>
                <div className="flex justify-center md:w-[50%] w-[80%] items-center ">
                  <p className="bg-white h-[4px] w-[20%]"></p>
                  <p className="bg-black h-[4px] w-[80%]"></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide4})` }}
            className="h-[100vh] bg-cover bg-no-repeat bg-center font-josefin "
          >
            <div className="flex flex-col items-center justify-end pb-20 h-screen bg-black/20">
              <div className="bg-black/50 flex flex-col justify-center items-center w-[95%] p-8 mx-auto ">
                <div className=" w-[100%] flex text-center flex-col justify-center items-center text-white text-5xl font-extrabold font-josefin">
                  <p className="">PEOPLE'S CHOICE AWARDS</p>
                  <p>. . .</p>
                  <p>2023</p>
                </div>
                <p className="text-white text-center ">
                  African Brilliance Unveiled: Celebrating Talents, Careers,
                  Businesses & Personalities.
                </p>
                <div className="flex justify-center md:w-[50%] w-[80%] items-center ">
                  <p className="bg-white h-[4px] w-[20%]"></p>
                  <p className="bg-black h-[4px] w-[80%]"></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
