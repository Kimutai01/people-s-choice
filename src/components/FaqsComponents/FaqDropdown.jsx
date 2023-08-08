import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqDropdown = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(null);

  const toggleParagraphVisibility = (index) => {
    setActiveParagraphIndex(activeParagraphIndex === index ? null : index);
  };
  return (
    <div className="bg-[#000] border-t-[1px] pb-16 border-gray-500 mt-10">
      {" "}
      <div className="flex flex-col mx-auto md:w-[90%] p-5 md:p-0 pt-10 ">
        <div className="mt-10 ">
          <div
            className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold items-center flex justify-between text-[#fff]`}
            onClick={() => toggleParagraphVisibility(0)}
          >
            <div className="flex items-center">
              <img src="/1.png" alt="" className="mr-5" />
              How do I participate?
            </div>
            {activeParagraphIndex === 0 ? (
              <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                <IoIosArrowUp className="inline-block " color="white " />
              </div>
            ) : (
              <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center">
                <IoIosArrowDown className="inline-block " />
              </div>
            )}
          </div>

          {activeParagraphIndex === 0 && (
            <p className="text-[grey] ml-10">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </p>
          )}
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(1)}
            >
              <div className="flex items-center">
                <img src="/2.png" alt="" className="mr-5" />
                Can I register in multiple categories?
              </div>
              {activeParagraphIndex === 1 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey] ml-12">
                It is highly recommended that you make an appointment. We are an
                independent auto repair center and we pride ourselves on our
                quality work and stellar reviews. We might be completely booked
                and not be able to get to your car right away. For that reason,
                we recommend making an appointment or calling ahead.
              </p>
            )}
          </div>
        </div>
        <div className="mt-7 border-t-[1px] border-[grey]">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(2)}
            >
              <div className="flex items-center">
                <img src="/3.png" alt="" className="mr-5" />
                Do you offer warranty
              </div>
              {activeParagraphIndex === 2 ? (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey] ml-10">
                Yes, we certainly do. Our warranty is 2 years or 24,000 miles
                and covers you nationwide! We are proud to stand behind our
                work.
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] mt-7 border-[grey]">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(3)}
            >
              <div className="flex items-center">
                <img src="/4.png" alt="" className="mr-5" />
                Do you have complete auto repair services
              </div>

              {activeParagraphIndex === 3 ? (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 3 && (
              <p className="text-[grey] ml-10">
                Yes, we have a complete body shop and do restore classic and
                vintage cars. Contact us to tell us about your project car
                today!
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(4)}
            >
              <div className="flex items-center">
                <img src="/5.png" alt="" className="mr-5" />
                Can you do a full technical assessment of my car
              </div>

              {activeParagraphIndex === 4 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 4 && (
              <p className="text-[grey] ml-10">
                Yes, you can get a full MOT with us, you don't even need to
                worry about additional purchases, as you can buy all MOT
                materials in our store
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqDropdown;
