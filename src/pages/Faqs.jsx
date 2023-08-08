import React from "react";
import SendMessage from "../components/FaqsComponents/SendMessage";
import FaqHero from "../components/FaqsComponents/FaqHero";
import FaqDropdown from "../components/FaqsComponents/FaqDropdown";

const Faqs = () => {
  return (
    <div className="bg-[#000] font-josefin">
      <FaqHero />
      <FaqDropdown />
      <SendMessage />
    </div>
  );
};

export default Faqs;
