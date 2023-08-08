import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex bg-black justify-between items-start p-4 text-white w-[100%]">
        <div className="md:w-[40%] w-[25%] h-[50px] gap-4 flex justify-end flex-col ">
          <div className="flex gap-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Sponsorship</p>
            <p>Gallery</p>
            <p>FAQs</p>
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
