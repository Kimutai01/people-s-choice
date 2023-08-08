import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
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
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex items-center justify-around bg-black p-8">
        <div className="w-[40%] flex flex-col justify-center items-center">
          <div className="flex justify-center text-white items-center gap-2">
            <div className="bg-[#BF8134]  w-[57px] rounded-md h-[45px] -m-12 flex justify-center items-center z-10 text-white">
              Next
            </div>

            <Swiper
              slidesPerView={1}
              className="h-[380px] w-[503px] flex justify-center items-center   swiper-container"
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Scrollbar]}
            >
              <SwiperSlide>
                <div className="flex w-[100%] h-[380px] flex-col">
                  <img
                    src="/slider1.png"
                    alt=""
                    className="object-contain w-[100%] h-[380px]"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-[100%] h-[380px] flex-col">
                  <img
                    src="/slider1.png"
                    alt=""
                    className="object-contain w-[100%] h-[380px]"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="bg-[#BF8134]  w-[57px] rounded-md h-[45px] -m-12 flex justify-center items-center z-10 text-white">
              Next
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-[380px] h-[85px] rounded-xl bg-white  flex justify-center gap-2 items-center">
            <img
              src="/register.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <p className="w-[60%] uppercase text-[#BF8134] text-2xl font-semibold">
              Register as a contestant
            </p>
          </div>
          <div className="w-[380px] h-[85px] rounded-xl bg-white  flex justify-center gap-2 items-center">
            <img
              src="/vote.png"
              alt=""
              className="object-contain w-[54px] h-[54px]"
            />
            <p className="w-[60%] uppercase text-[#BF8134] text-2xl font-semibold">
              Vote for a nominee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomineeHighlights;
