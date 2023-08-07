import React from "react";

const EventDetails = () => {
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex items-center justify-around bg-black p-8">
        <div className="w-[30%] bg-gradient-to-b from-white rounded-2xl flex flex-col justify-between from-80% to-black/50 h-[350px]">
          <div className="flex gap-2 p-4 flex-col">
            <p>Save the Date</p>
            <div className="gap-2 flex ">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl">12</p>
                <p>D D</p>
              </div>
              <p className="w-[1px] h-[50px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl">12</p>
                <p>D D</p>
              </div>
              <p className="w-[1px] h-[50px] bg-black"></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl">12</p>
                <p>D D</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] mx-auto border-4 border-[#BF8134] justify-center items-center">
            18 DAYS TO GO
          </div>
          <div className="flex flex-row  bg-white w-[80%] text-xl font-semibold mx-auto gap-2 rounded-xl text-[#BF8134] p-4 justify-center items-center">
            <p>Purchase a Ticket</p>
          </div>
              </div>
              
              <div className="flex flex-col">
                  

                  
              </div>
      </div>
    </div>
  );
};

export default EventDetails;
