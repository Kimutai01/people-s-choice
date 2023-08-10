import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Mission = () => {
  return (
    <div className="bg-black flex flex-col gap-4 p-4 font-josefin">
      <div className="flex gap-10 mt-5 md:mx-5 items-center w-[100%]">
        <div className="md:w-[70%]">
          <p className="bg-white h-[1px] w-[100%] " />
        </div>
        <p className="text-3xl uppercase text-white">Mission and Vision</p>
      </div>
      <div className="md:p-8 p-2 bg-black">
        <Swiper
          slidesPerView={1}
          className=" w-[100%] flex py-8  justify-center md:m-4 items-center   swiper-container"
          loop={true}
          pagination={{
            clickable: true,
            color: "white",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        >
          <SwiperSlide>
            <div className="flex w-[100%] rounded-t-3xl h-[100%] gap-2  flex-col">
              <div
                className="bg-cover bg-no-repeat bg-center h-[397px] flex justify-center items-end  w-[100%] rounded-t-3xl"
                style={{ backgroundImage: `url(/faq.png)` }}
              >
                <div className="flex justify-center items-end h-[100%] w-[100%] rounded-t-3xl bg-gradient-to-b from-[#BF8134] to-black/50">
                  <p className="md:text-[100px] text-7xl font-bold uppercase text-white/80 font-josefin">
                    Mission
                  </p>
                </div>
              </div>
              <p className="text-white">
                At People’s Choice Awards, our mission is to shine a spotlight
                on the exceptional talents, career men, businesses, and
                personalities within Africa, celebrating their achievements and
                contributions to society. We strive to be a premier recognition
                and award program that not only acknowledges excellence but also
                serves as a catalyst for positive change, inspiring individuals
                and communities to reach their fullest potential and foster a
                thriving and inclusive continent.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex w-[100%] rounded-t-3xl h-[100%] gap-2  flex-col">
              <div
                className="bg-cover bg-no-repeat bg-center h-[397px] flex justify-center items-end  w-[100%] rounded-t-3xl"
                style={{ backgroundImage: `url(/faq.png)` }}
              >
                <div className="flex justify-center items-end h-[100%] w-[100%] rounded-t-3xl bg-gradient-to-b from-[#BF8134] to-black/50">
                  <p className="md:text-[100px] text-7xl font-bold uppercase text-white/80">
                    Vision
                  </p>
                </div>
              </div>
              <p className="text-white ">
                Our vision is to be the leading and most respected recognition
                and award program, revered for its commitment to promoting
                African talents, career men, businesses, and personalities on a
                global stage. We envision a future where the accomplishments of
                these remarkable individuals are not only recognized and
                celebrated but also serve as a driving force in shaping a
                prosperous and united Africa. By honoring excellence and
                providing a platform for inspiration and growth, we aim to
                create a legacy that will continue to inspire generations to
                come, forging a brighter and more promising future for Africa
                and its people.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mission;
