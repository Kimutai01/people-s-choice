import React from "react";

const Gallery1 = () => {
  return (
    <div className="bg-[#000] font-josefin">
      <div className="text-center mb-5">
        <button class="my-button mt-auto p-4 bg-[#fff] uppercase rounded-md text-[#BF8134]">
          <a href="https://koikai.passgallery.com/-peopleschoiceawards2022/gallery">
            View more photos
          </a>
        </button>
      </div>
      <div className="flex  h-[100vh]">
        <div className="w-1/3 h-[100vh]">
          <div className="h-1/3 w-[100%]">
            <img
              src="/1.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="h-1/3 w-[100%]">
            <img
              src="/2.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="h-1/3 w-[100%]">
            <img
              src="/3.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
        <div className="w-1/3 h-[100vh]">
          <div className="h-1/2 w-[100%]">
            <img
              src="/4.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          <div className="h-1/2  w-[100%] ">
            <img
              src="/5.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
        <div className="w-1/3 h-[100vh]">
          <div className="h-[100%] w-[100%] ">
            <img
              src="/6.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
