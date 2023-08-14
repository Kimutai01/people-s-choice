import React from "react";

import homebg from "/vend.jpg";
const Vendorship = () => {
  const packages = [
    {
      id: 1,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 2,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 3,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 4,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 5,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 6,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 7,
      category: " naming rights",
      rates: "KES 4000",
    },
    {
      id: 8,
      category: " naming rights",
      rates: "KES 4000",
    },
  ];
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex flex-col w-[100%] gap-8 bg-black  p-4 md:p-8">
        <div className="flex md:flex-row flex-col-reverse justify-center gap-12 items-center">
          <div className="md:w-[50%] w-[100%] bg-white p-8 h-[424px] rounded-t-3xl">
            <div className="flex ">
              <div className="w-[50%] text-lg  uppercase  text-[#BF8134] flex flex-col gap-1">
                <p className="border-b-2 border-black  ">Vendor</p>
                <p>Cocktail bar</p>
                <p>Food and beverage</p>
                <p>Hot beverage</p>
                <p>Brand activation</p>
                <p>Stimulants</p>
                <p>Small Businesses</p>
              </div>
              <div className=" flex w-[50%] border-l-2 uppercase  border-black text-lg   flex-col gap-1">
                <p className="border-b-2 px-4 border-black">Vendor rates</p>
                <p className="px-4">Kes 150,000</p>
                <p className="px-4">Kes 100,000</p>
                <p className="px-4">Kes 50,000</p>
                <p className="px-4">Kes 50,000</p>
                <p className="px-4">Kes 25,000</p>
                <p className="px-4">Kes 15,000</p>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-[100%]  rounded-t-3xl">
            <div
              className="bg-cover bg-no-repeat bg-center h-[424px] w-[100%] rounded-t-3xl"
              style={{ backgroundImage: `url(${homebg})` }}
            >
              <div className="h-[100%] w-[100%] flex justify-center items-end bg-gradient-to-b from-transparent to-[#BF8134]/50 rounded-t-3xl">
                <div className="flex justify-center p-4 items-center gap-4">
                  <a
                    href="/vendorship.pdf"
                    className="flex bg-white w-[80%] border-4 p-2 border-[#BF8134]  h-[103px] justify-center items-center gap-4"
                    download
                  >
                    <img
                      src="/download.png"
                      alt=""
                      className="h-[50px] w-[50px] object-contain"
                    />
                    <p className="text-lg uppercase font-semibold text-[#BF8134] ">
                      Download Vendorship Proposal
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendorship;
