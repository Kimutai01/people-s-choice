import React from "react";

const SponsorshipPackages = () => {
  const packages = [
    {
      id: 1,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 2,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 3,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 4,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 5,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 6,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
    {
      id: 7,
      benefit: " naming rights",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "no",
      silver_sponsor: "no",
      gold_sponsor: "no",
      title_sponsor: "yes",
    },
  ];
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex flex-col w-[100%]  gap-8 bg-black p-4 md:p-8">
        <div className="w-[100%] overflow-scroll">
          <table class=" uppercase  overflow-scroll  text-center w-[100%] overflow-y-scroll bg-white">
            <thead>
              <tr className="border-b-2  border-black">
                <th className="border-r-2 text-[#985B16]  uppercase border-black">
                  Benefits
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>SUPPORT</p>
                    <p>SPONSOR</p>
                    <p>(KES 100,000)</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((item) => (
                <tr className="text-xl">
                  <td className="border-r-2  text-[#985B16] uppercase border-black">
                    {item.benefit}
                  </td>
                  <td>{item.support_sponsor}</td>
                  <td>{item.category_sponsor}</td>
                  <td>{item.bronze_sponsor}</td>
                  <td>{item.silver_sponsor}</td>
                  <td>{item.gold_sponsor}</td>
                  <td>{item.title_sponsor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="flex bg-white md:w-[60%] w-[90%] border-4 border-[#BF8134]  h-[103px] justify-center items-center p-4 gap-4">
            <img
              src="/download.png"
              alt=""
              className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
            />
            <p className="md:text-3xl text-base uppercase font-semibold text-[#BF8134] ">
              Download Sponsorship Proposal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPackages;
