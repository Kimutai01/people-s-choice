import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqDropdown = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(null);

  const toggleParagraphVisibility = (index) => {
    setActiveParagraphIndex(activeParagraphIndex === index ? null : index);
  };
  return (
    <div className="bg-[#000] border-t-[1px] pb-16 border-[#fff] mt-10">
      {" "}
      <div className="flex flex-col mx-auto md:w-[90%] p-5 md:p-0 pt-10 ">
        <div className="mt-10 ">
          <div
            className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold items-center flex justify-between text-[#fff]`}
            onClick={() => toggleParagraphVisibility(0)}
          >
            <div className="flex items-center text-[#fff]">
              <img src="/1.png" alt="" className="mr-5" />
              How do I apply to participate?
            </div>
            {activeParagraphIndex === 0 ? (
              <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                <IoIosArrowUp className="inline-block " color="white " />
              </div>
            ) : (
              <div className="h-7 w-7 bg-[#BF8134] text-[#fff]  text-center items-center flex justify-center">
                <IoIosArrowDown className="inline-block " />
              </div>
            )}
          </div>

          {activeParagraphIndex === 0 && (
            <p className="text-[grey] ml-10">
              Visit our website’s home page, and right there, you'll spot the
              "Contestant Registration" link. Click on it to access the
              registration form and submit your entry for the People's Choice
              Awards
            </p>
          )}
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(1)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/2.png" alt="" className="mr-5" />
                Can I register in multiple categories?
              </div>
              {activeParagraphIndex === 1 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff]  text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey] ml-12">
                Certainly! You have the flexibility to register your submissions
                in multiple categories, giving you more opportunities to gain
                recognition and celebrate your achievements.
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
              <div className="flex items-center text-[#fff]">
                <img src="/3.png" alt="" className="mr-5" />
                Can I vote multiple times for the same contestant?
              </div>
              {activeParagraphIndex === 2 ? (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff]  text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey] ml-10">
                Yes, you can cast multiple votes for the same contestant. Feel
                free to vote as many times as you'd like to make sure your
                favorite nominee has a better chance of winning.
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
              <div className="flex items-center text-[#fff]">
                <img src="/4.png" alt="" className="mr-5" />
                Can people in the Diaspora vote?
              </div>

              {activeParagraphIndex === 3 ? (
                <div className="h-7 w-7 bg-[#BF8134] text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff]  text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 3 && (
              <p className="text-[grey] ml-10">
                Yes, voting for the People's Choice Awards is not limited by
                geographical boundaries, allowing people from the diaspora to
                have their say in the award winners
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
              <div className="flex items-center text-[#fff]">
                <img src="/Group21.png" alt="" className="mr-5" />
                How do you ensure a fair voting process?
              </div>

              {activeParagraphIndex === 4 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 4 && (
              <p className="text-[grey] ml-10">
                We ensure a fair voting process through our partnership with
                Tamasha Kenya, a third-party company, utilizing a secure and
                transparent voting platform that reflects votes immediately,
                with real-time monitoring for contestants
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(5)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/Vector13.png" alt="" className="mr-5" />
                How are winners Selected?
              </div>

              {activeParagraphIndex === 5 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 5 && (
              <p className="text-[grey] ml-10">
                Winners for the People's Choice Awards are selected through a
                public voting process, where the public votes for their
                preferred nominees via USSD or our online voting platform, and
                the nominee with the highest number of votes in each category
                wins.
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(6)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/Group22.png" alt="" className="mr-5" />
                Why is there a voting fee?
              </div>

              {activeParagraphIndex === 6 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 6 && (
              <p className="text-[grey] ml-10">
                The voting fee exists to implement a cash reward system for all
                contestants, providing fair compensation and enabling them to
                monetize their networks and fanbase while supporting the
                sustainability and transparency of the People's Choice Awards.
                Every contestant (winner or not) is entitled to 50% of the total
                cash collected from their votes
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(7)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/Vector12.png" alt="" className="mr-5" />
                How do you reward winners?
              </div>

              {activeParagraphIndex === 7 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 7 && (
              <p className="text-[grey] ml-10">
                All registered contestants shall receive 50% of the total cash
                collected from their votes, while category winners are honored
                with Trophies and certificates, and first and second runners-up
                receive certificates.
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(8)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/time.png" alt="" className="mr-5" />
                When is the Awarding Ceremony?
              </div>

              {activeParagraphIndex === 8 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 8 && (
              <p className="text-[grey] ml-10">
                Save the date! The Award Gala is scheduled for October 14th,
                2023.
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold  flex justify-between text-[#fff]`}
              onClick={() => toggleParagraphVisibility(9)}
            >
              <div className="flex items-center text-[#fff]">
                <img src="/Group22.png" alt="" className="mr-5" />
                Is the Award Ceremony free to attend?
              </div>

              {activeParagraphIndex === 9 ? (
                <div className="h-7 w-7 bg-[#BF8134]  text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 bg-[#BF8134] text-[#fff] text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
              )}
            </h1>

            {activeParagraphIndex === 9 && (
              <p className="text-[grey] ml-10">
                The award ceremony is free for all nominees to attend. However,
                for accompanying guests and members of the public who wish to
                join the event, tickets will be available for purchase on our
                website.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqDropdown;
