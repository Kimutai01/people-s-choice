import React from "react";

import homebg from "/vend.jpg";
const Vendorship = () => {
  const packages = [
    {
      id: 1,
      category: "Cocktail Bar",
      rates: "KES 150,000",
    },
    {
      id: 2,
      category: "Food And Beverage",
      rates: "KES 100,000",
    },
    {
      id: 3,
      category: "Hot Beverage",
      rates: "KES 50,000",
    },
    {
      id: 4,
      category: "Brand Activation",
      rates: "KES 50,000",
    },
    {
      id: 5,
      category: "Stimulants",
      rates: "KES 25,000",
    },
    {
      id: 6,
      category: "Small Businesses",
      rates: "KES 15,000",
    },
  ];
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex flex-col w-[100%] gap-8 bg-black  p-4 md:p-8">
        <div className="flex md:flex-row flex-col-reverse justify-center gap-12 items-center">
          <div className="md:w-[50%] w-[100%] bg-white p-8 h-[424px] rounded-t-3xl">
            <div className="w-[100%] overflow-scroll">
              <table class="  overflow-scroll  text-center w-[100%] overflow-y-scroll bg-white">
                <thead>
                  <tr className="border-b-2 uppercase  text-[#985B16]  border-black">
                    <th>
                      {" "}
                      <p className="  border-black  ">Vendor</p>
                    </th>

                    <th>
                      {" "}
                      <p className=" border-black  ">Vendor Rates</p>
                    </th>
                  </tr>{" "}
                </thead>
                <tbody>
                  {packages.map((item) => (
                    <tr className="text-lg">
                      <td className="border-r-2 uppercase  text-[#985B16]  border-black">
                        {item.category}
                      </td>
                      <td>{item.rates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
