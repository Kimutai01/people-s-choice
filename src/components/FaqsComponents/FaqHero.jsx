import React from "react";

const FaqHero = () => {
  return (
    <div className="bg-[#000]">
      <div className="flex items-center mx-auto md:gap-10 gap-5 w-[90%] md:w-[80%] pb-10">
        <div className="border-t-[1px] border-gray-400 md:w-[20%] w-[10%]"></div>
        <h1 className="text-[#fff] uppercase text-lg md:text-5xl font-bold md:font-extrabold">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div className="relative w-[80%] mx-auto">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #BF8134 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
        <img
          className="object-cover w-full h-full"
          src="/faq.png"
          alt="Your Image"
        />
        <div className="absolute bottom-0 left-0 w-full text-center p-4">
          <p className="text-white font-extrabold text-5xl md:text-9xl">FAQS</p>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
