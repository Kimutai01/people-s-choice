import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black px-4 py-8 flex flex-col gap-4 w-[100%] font-josefin">
      <div className="md:flex md:flex-row gap-5 text-center md:items-center  font-josefin ">
        <div className="w-[70%] hidden md:block text-white  font-bold ">
          <p className="bg-white h-[1px] hidden md:block w-[100%]"></p>
        </div>
        <p className="text-white  font-extrabold text-2xl md:text-3xl">
          CONNECT WITH US
        </p>
      </div>

      <div className="w-[100%] flex md:flex-row flex-col justify-between  gap-4 items-center md:items-start">
        <div className="flex flex-col justify-center items-start text-white gap-4">
          <Link to="tel:+254742816001">
            <div className="flex gap-2 items-center">
              <img
                src="/call.png"
                alt=""
                className="object-contain object w-[35px] h-[35px]"
              />
              <p>+254742 816 001</p>
            </div>
          </Link>
          <Link to="mailto:info@peopleschoiceawards.africa">
            <div className="flex gap-2 items-center">
              <img
                src="/mail.png"
                alt=""
                className="object-contain w-[35px] h-[35px]"
              />
              <p>info@peopleschoiceawards.africa</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-6    md:gap-16 items-center">
            <a
              href="https://www.tiktok.com/@peopleschoiceawardske?_t=8eW9wOUh6tJ&_r=1"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/tiktok.png"
                alt=""
                className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/peopleschoiceawardske/?igshid=MzRlODBiNWFlZA%3D%3D"
            >
              <img
                src="/instagram.png"
                alt=""
                className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/pca_kenya?t=Elu6qQ1o75q5bmQj5kXBtg&s=09"
            >
              <img
                src="/twitter.png"
                alt=""
                className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100083645064267&mibextid=ZbWKwL"
            >
              <img
                src="/facebook.png"
                alt=""
                className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/@peopleschoiceawardskenya3703"
            >
              <img
                src="/youtube.png"
                alt=""
                className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
              />
            </a>
            <img
              src="/linkedin.png"
              alt=""
              className="object-contain hover:scale-105 transition-all ease-in-out duration-500 w-[35px] h-[35px]"
            />
          </div>

          <div className="w-[100%] text-white flex md:flex-row flex-col gap-8 items-center">
            <p className="underline"> Terms and Conditions</p>
            <p className="underline">Privacy Policy</p>
            <p>People's Choice AwardsKE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
