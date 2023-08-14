import React from "react";

const SponsorshipPackages = () => {
  const packages = [
    {
      id: 1,
      benefit: " Gala Tickets",
      support_sponsor: "2",
      category_sponsor: "3",
      bronze_sponsor: "4",
      silver_sponsor: "6",
      gold_sponsor: "10",
    },
    {
      id: 2,
      benefit: " Trophy co-branding",
      support_sponsor: "yes",
      category_sponsor: "yes",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
    {
      id: 3,
      benefit: " Activation booth at gala",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
    {
      id: 4,
      benefit: " Promo video on screens",
      support_sponsor: "no",
      category_sponsor: "0.5 min",
      bronze_sponsor: "1 min",
      silver_sponsor: "1.5 min",
      gold_sponsor: "2 min",
    },
    {
      id: 5,
      benefit: " Speaker opportunity at gala",
      support_sponsor: "no",
      category_sponsor: "2 min",
      bronze_sponsor: "3 min",
      silver_sponsor: "4 min",
      gold_sponsor: "6 min",
    },
    {
      id: 6,
      benefit: " Ad placement in the event",
      support_sponsor: "no",
      category_sponsor: "no",
      bronze_sponsor: "1/4 page",
      silver_sponsor: "1/2 page",
      gold_sponsor: "full page",
    },
    {
      id: 7,
      benefit: " mc mention on stage",
      support_sponsor: "yes",
      category_sponsor: "yes",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
    {
      id: 8,
      benefit: " recognition on social media",
      support_sponsor: "no",
      category_sponsor: "yes",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
    {
      id: 9,
      benefit: " recognition on website",
      support_sponsor: "no",
      category_sponsor: "yes",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
    {
      id: 10,
      benefit: " chance to present award",
      support_sponsor: "1 award",
      category_sponsor: "1 award",
      bronze_sponsor: "1 award",
      silver_sponsor: "3 awards",
      gold_sponsor: "3 awards",
    },
    {
      id: 11,
      benefit: " logo promotional materials",
      support_sponsor: "yes",
      category_sponsor: "yes",
      bronze_sponsor: "yes",
      silver_sponsor: "yes",
      gold_sponsor: "yes",
    },
  ];
  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
      <div className="flex flex-col w-[100%]  gap-8 bg-black p-4 md:p-8">
        <div className="w-[100%] overflow-scroll">
          <table class="   overflow-scroll  text-center w-[100%] overflow-y-scroll bg-white">
            <thead className="uppercase">
              <tr className="border-b-2  border-black">
                <th className="border-r-2 text-[#985B16]  uppercase border-black">
                  Benefits
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>trophy</p>
                    <p>SPONSOR</p>
                    <p>(KES 50,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>Bronze</p>
                    <p>SPONSOR</p>
                    <p>(KES 200,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>Silver</p>
                    <p>SPONSOR</p>
                    <p>(KES 400,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>Gold</p>
                    <p>SPONSOR</p>
                    <p>(KES 600,000)</p>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-1">
                    <p>Platinum</p>
                    <p>SPONSOR</p>
                    <p>(KES 1,000,000)</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((item) => (
                <tr className="text-lg">
                  <td className="border-r-2 uppercase  text-[#985B16]  border-black">
                    {item.benefit}
                  </td>
                  <td>{item.support_sponsor}</td>
                  <td>{item.category_sponsor}</td>
                  <td>{item.bronze_sponsor}</td>
                  <td>{item.silver_sponsor}</td>
                  <td>{item.gold_sponsor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-4">
          <a
            href="/sponsorship.pdf"
            className="flex bg-white md:w-[60%] w-[90%] border-4 border-[#BF8134]  h-[103px] justify-center items-center p-4 gap-4"
            download
          >
            <img
              src="/download.png"
              alt=""
              className="md:h-[50px] md:w-[50px] w-[30px] h-[30px] object-contain"
            />
            <p className="md:text-2xl text-base uppercase font-semibold text-[#BF8134] ">
              Download Sponsorship Proposal
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPackages;
