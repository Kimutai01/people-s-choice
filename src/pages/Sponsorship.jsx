import React from "react";
import SponsorshipHero from "../components/SponsorshipComponents/SponsorshipHero";
import SponsorshipPackages from "../components/SponsorshipComponents/SponsorshipPackages";
import Vendorship from "../components/SponsorshipComponents/Vendorship";
const Sponsorship = () => {
  return (
    <div>
      <SponsorshipHero />
      <SponsorshipPackages />
      <Vendorship />
    </div>
  );
};

export default Sponsorship;
