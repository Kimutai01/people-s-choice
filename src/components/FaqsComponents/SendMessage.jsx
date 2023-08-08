import React from "react";

const SendMessage = () => {
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex flex-col w-[100%] gap-8 bg-black p-8">
        <div className="flex justify-between items-center p-4">
          <div className="w-[5%]">
            <p className="text-3xl  font-semibold uppercase text-white/90">
              ANY ADDITIONAL QUESTIONS?
            </p>
          </div>
          <div className="w-[80%]">
            <p className="bg-white h-[2px] w-[100%]"></p>
          </div>
        </div>
        <div className="flex items-end justify-end  text-white">
          <div className="w-[50%] flex flex-col gap-2">
            <div className="flex justify-between w-[100%]">
              <div className="w-[48%]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
                />
              </div>
              <div className="w-[48%]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
                />
              </div>
            </div>
            <div className="w-[100%]">
              <input
                type="text"
                placeholder="Email"
                className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
              />
            </div>
            <div className="w-[100%]">
              <textarea
                type="text"
                placeholder="Write Your Message Here"
                className="w-[100%] h-[100px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
              />
            </div>
            <div className="w-[100%] flex justify-end">
                          <button className=" w-[226px] h-[57px] text-2xl uppercase bg-white rounded-3xl text-[#BF8134]">
                              Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
