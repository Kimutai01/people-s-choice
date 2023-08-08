import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex bg-black justify-between items-start p-4 text-white w-[100%]">
        <div className="md:w-[40%] w-[25%] h-[50px] gap-4 flex justify-end flex-col ">
          <div className="flex gap-2">
            <Link to="/">
              <p className="hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]">
                Home
              </p>
            </Link>
            <Link to="/about">
              <p className="hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]">
                About Us
              </p>
            </Link>
            <Link to="/sponsorship">
              <p className="hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]">
                Sponsorship
              </p>
            </Link>
            <Link to="/gallery">
              <p className="hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]">
                Gallery
              </p>
            </Link>
            <Link to="/faqs">
              <p className="hover:scale-105 transition-all ease-in-out duration-500 hover:text-[#BF8134]">
                FAQs
              </p>
            </Link>
          </div>

          <p className="bg-[#BF8134] h-[2px] w-[100%]"></p>
        </div>

        <div>
          <img
            src="/logo.png"
            className="w-[100%] h-[100px] object-cover"
            alt=""
          />
        </div>

        <div className="md:w-[40%] w-[25%] text-base h-[50px] gap-4  flex justify-end items-end flex-col ">
          <div className="flex gap-2">
            <p>Register</p>
            <p>|</p>
            <p>Vote</p>
          </div>

          <p className="bg-[#BF8134] h-[2px] w-[100%]"></p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
