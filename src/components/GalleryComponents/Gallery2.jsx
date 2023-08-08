import React from "react";

const Gallery2 = () => {
  return (
    <div className="flex  h-[100vh]">
      <div className="w-1/3 h-[100vh]">
        <div className="h-1/2 w-[100%]">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>

        <div className="h-1/2  w-[100%] ">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className="w-1/3 h-[100vh]">
        <div className="h-[100%] w-[100%] ">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <div className="w-1/3 h-[100vh]">
        <div className="h-1/3  w-[100%]">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="h-1/3  w-[100%] ">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="h-1/3  w-[100%]">
          <img
            src="/homebg.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
