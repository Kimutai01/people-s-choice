import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Mission = () => {
  return (
    <div className="p-8 bg-black">
      <Swiper
        slidesPerView={1}
        className=" w-[100%] flex  justify-center items-center   swiper-container"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
      >
        <SwiperSlide>
          <div className="flex w-[100%] rounded-t-3xl h-[100%] gap-2  flex-col">
            <div
              className="bg-cover bg-no-repeat bg-center h-[397px] flex justify-center items-end  w-[100%] rounded-t-3xl"
              style={{ backgroundImage: `url(/slider1.png)` }}
            >
              <p className="text-[100px] font-bold uppercase text-white/80">
                Mission
              </p>
            </div>
            <p className="text-white">
              At People’s Choice Awards, our mission is to shine a spotlight on
              the exceptional talents, career men, businesses, and personalities
              within Africa, celebrating their achievements and contributions to
              society. We strive to be a premier recognition and award program
              that not only acknowledges excellence but also serves as a
              catalyst for positive change, inspiring individuals and
              communities to reach their fullest potential and foster a thriving
              and inclusive continent.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[100%] rounded-t-3xl h-[100%] gap-2  flex-col">
            <div
              className="bg-cover bg-no-repeat bg-center h-[397px] flex justify-center items-end  w-[100%] rounded-t-3xl"
              style={{ backgroundImage: `url(/slider1.png)` }}
            >
              <p className="text-[100px] font-bold uppercase text-white/80">
                Mission
              </p>
            </div>
            <p className="text-white">
              At People’s Choice Awards, our mission is to shine a spotlight on
              the exceptional talents, career men, businesses, and personalities
              within Africa, celebrating their achievements and contributions to
              society. We strive to be a premier recognition and award program
              that not only acknowledges excellence but also serves as a
              catalyst for positive change, inspiring individuals and
              communities to reach their fullest potential and foster a thriving
              and inclusive continent.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Mission;
