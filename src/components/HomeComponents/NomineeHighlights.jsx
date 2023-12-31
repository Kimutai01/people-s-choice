import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMoneyBill } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const NomineeHighlights = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeback = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  return (
    <div className="border-b-[#BF8134] flex gap-4 pb-10 flex-col bg-black p-2 md:p-8   border-2 border-l-0 border-r-0 border-t-[#BF8134] font-josefin">
      <div className="md:flex text-center pt-5 md:gap-5 md:items-center w-[100%]">
        <div className="w-[70%] hidden md:block">
          <p className="bg-white h-[1px] w-[100%] " />
        </div>
        <p className="text-3xl font-extrabold  text-white">
          NOMINEE HIGHLIGHTS
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col md:justify-around justify-center gap-8 bg-black ">
        <div className="md:w-[40%] w-[100%] flex flex-col justify-center items-center">
          <div className="flex justify-center text-white items-center gap-2">
            <div
              className="bg-[#BF8134]  md:w-[57px] w-[25px] rounded-md  cursor-pointer md:h-[45px] h-[30px] md:-m-16 -m-4  flex justify-center items-center z-10 text-white"
              onClick={swipeback}
            >
              <img
                src="/back.png"
                alt=""
                className="md:w-[15px] w-[10px] h-[12px] md:h-[22px] object-contain"
              />
            </div>

            <Swiper
              slidesPerView={1}
              className=" md:w-[503px]  w-[300px] flex justify-center items-center   swiper-container"
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Scrollbar]}
            >
              <SwiperSlide>
                <div className="flex w-[100%]  flex-col">
                  <img
                    src="/slider1.png"
                    alt=""
                    className="object-contain h-[340px] w-[100%] "
                  />
                  <div className="w-[100%] md:px-8 px-4 flex justify-between items-center text-white">
                    <div className="flex  flex-col gap-2">
                      <p className="text-2xl uppercase">Mr SIR XYZ</p>
                      <p>master of ceremony</p>
                    </div>

                    <div className="gap-4 flex justify-center items-center">
                      <div>
                        <p className="h-[50px] w-[2px] bg-white " />
                      </div>
                      <div className="flex  flex-col uppercase gap-2">
                        <p>category</p>
                        <p>of the year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-[100%]  flex-col">
                  <img
                    src="/slider1.png"
                    alt=""
                    className="object-contain h-[340px] w-[100%] "
                  />
                  <div className="w-[100%] md:px-8 px-4 flex justify-between items-center text-white">
                    <div className="flex  flex-col gap-2">
                      <p className="text-2xl uppercase">Mr SIR XYZ</p>
                      <p>master of ceremony</p>
                    </div>

                    <div className="gap-4 flex justify-center items-center">
                      <div>
                        <p className="h-[50px] w-[2px] bg-white " />
                      </div>
                      <div className="flex  flex-col uppercase gap-2">
                        <p>category</p>
                        <p>of the year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              className="bg-[#BF8134]  md:w-[57px] w-[25px] rounded-md  cursor-pointer md:h-[45px] h-[30px] md:-m-16 -m-4  flex justify-center items-center z-10 text-white"
              onClick={swipe}
            >
              <img
                src="/next.png"
                alt=""
                className="md:w-[15px] w-[10px] h-[12px] md:h-[22px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="md:w-[380px] hover:scale-105 duration-500 ease-out cursor-pointer w-[80%] h-[85px] rounded-xl bg-white  flex justify-center gap-2 items-center">
            <img
              src="/register.png"
              alt=""
              className="object-contain w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
            />
            <a
              href="https://shorturl.at/fADZ5"
              rel="noreferrer"
              target="_blank"
              className="w-[60%] uppercase  text-[#BF8134] text-lg md:text-2xl font-semibold"
            >
              Register as a contestant
            </a>
          </div>
          <div className="md:w-[380px] w-[80%] h-[85px] hover:scale-105 duration-500 ease-out cursor-pointer rounded-xl bg-white  flex justify-center gap-2 items-center">
            <img
              src="/vote.png"
              alt=""
              className="object-contain w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
            />
            <a
              href="https://tamasha.ke/polls/?p=Peoples%20Choice%20Awards%202023"
              rel="noreferrer"
              target="_blank"
              className="w-[60%] uppercase text-[#BF8134] text-lg md:text-2xl font-semibold"
            >
              Vote for a nominee
            </a>
          </div>

          <div className="md:w-[380px] w-[80%] h-[85px] rounded-xl hover:scale-105 duration-500 ease-out cursor-pointer bg-white  flex justify-center gap-2 items-center">
            <FaMoneyBill className="text-[#BF8134] w-[40px] h-[40px] md:w-[54px] md:h-[54px]" />
            <a
              className="w-[60%] uppercase text-[#BF8134] text-lg md:text-2xl font-semibold"
              href="https://madfun.com/event/48"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomineeHighlights;
