import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex bg-black justify-between  md:flex-row flex-row-reverse items-start p-4 text-white w-[100%] font-josefin">
        <div className="md:w-[40%] w-[25%] h-[50px] gap-4 flex justify-between md:items-start items-end flex-col ">
          <div className=" hidden md:flex justify-between w-[100%] mt-2 uppercase items-start gap-2">
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
          <div className="md:hidden block z-10">
            {nav ? (
              <AiOutlineClose
                className=" text-[#BF8134] text-2xl"
                onClick={toggleNav}
              />
            ) : (
              <FaBars className="text-[#BF8134] text-2xl" onClick={toggleNav} />
            )}
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

        <div className="md:w-[40%] w-[25%] uppercase md:text-base text-xs h-[50px] gap-4 ml-3  flex justify-end items-end flex-col ">
          <div className="flex items-center gap-2 md:gap-12">
            <button className=" hidden md:block uppercase rounded-md p-1 ">
              <a href="" className="mt-2">
                Buy tickets
              </a>
            </button>
            <button className="hidden md:block uppercase rounded-md p-1 ">
              <a href="">Contestant poster</a>
            </button>
            {/* <div className="bg-white rounded-md flex justify-center items-center gap-2 ">
              <p className="text-lg text-[#000] ">Contestant Poster</p>
            </div> */}
            <p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfI8njrxtS7yuOeJem0wZrw8OCW8jDLfqhf1G7TB44XqcHquA/viewform">
                Register
              </a>
            </p>

            <p>Vote</p>
          </div>

          <p className="bg-[#BF8134] h-[2px] w-[100%]"></p>
        </div>
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-center  w-full h-screen bg-black/80 text-white duration-300 ease-in-out"
            : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center text-center w-full h-screen  bg-black/80 text-white duration-300 ease-in-out"
        }
      >
        <ul onClick={toggleNav}>
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>

          <Link to="/about">
            <li className="p-4">About Us</li>
          </Link>

          <Link to="/sponsorship">
            <li className="p-4">Sponsorship</li>
          </Link>
          <Link to="/gallery">
            <li className="p-4">Gallery</li>
          </Link>
          <Link to="/faqs">
            <li className="p-4">FAQs</li>
          </Link>
          <div className="flex flex-col gap-5">
            <button className="uppercase rounded-md p-2 bg-[#fff] text-[#000]">
              <a href="" className="mt-2">
                Buy tickets
              </a>
            </button>
            <button className="uppercase rounded-md p-2 bg-[#fff] text-[#000]">
              <a href="">Contestant poster</a>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
