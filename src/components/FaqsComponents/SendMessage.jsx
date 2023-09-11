import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const SendMessage = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      toast.error("Email not sent ,Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_bm094u7",
          "template_bwh4jns",
          form.current,
          "iClOpEkVpF03NEqNf"
        )
        .then(
          (result) => {
            setFirstName("");
            setLastName("");
            setEmail("");

            setMessage("");
            console.log(result);

            setTimeout(() => {
              toast.success("Email Sent , We will get back to you soon", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="border-b-[#BF8134]  border-2 border-l-0 border-r-0 border-t-[#BF8134]">
     
      <div className="flex flex-col w-[100%] gap-8 bg-black p-8">
        <div className="flex justify-between items-center p-4">
          <div className="md:w-[5%]">
            <p className="md:text-3xl  font-semibold uppercase text-white/90">
              ANY ADDITIONAL QUESTIONS?
            </p>
          </div>
          <div className="w-[80%]">
            <p className="bg-white h-[2px] md:w-[100%]"></p>
          </div>
        </div>
        <div className="flex items-end justify-end  text-white">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-[50%] flex flex-col gap-2"
          >
            <div className="flex justify-between w-[100%]">
              <div className="w-[48%]">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="first_name"
                  className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
                />
              </div>
              <div className="w-[48%]">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
                />
              </div>
            </div>
            <div className="w-[100%]">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] h-[50px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
              />
            </div>
            <div className="w-[100%]">
              <textarea
                type="text"
                placeholder="Write Your Message Here"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-[100%] h-[200px]  bg-[#BF8134] focus:border-none focus:border-transparent border-0 border-transparent placeholder-[#CBCCD3] text-[#CBCCD3] outline-none ring-0 border-none rounded-md p-4"
              />
            </div>
            <div className="w-[100%] flex md:justify-end">
              <button
                className=" w-[226px] h-[57px] text-2xl uppercase bg-white rounded-3xl text-[#BF8134]"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
