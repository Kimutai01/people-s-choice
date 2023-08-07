import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex bg-black justify-between items-center p-4 text-white w-[100%]">
        <div className="w-[40%]  gap-4 flex flex-col ">
          <p className="bg-[#BF8134] h-[2px] w-[100%]"></p>
        </div>

        <div className="w-[20%] ">
          <img
            src="/logo.png"
            className="w-[100%] h-[145px] object-contain"
            alt=""
          />
        </div>

        <div className="w-[40%]  flex flex-col items-end">
          <p className="bg-[#BF8134] h-[2px] w-[100%]"></p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
