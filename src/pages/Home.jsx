import React from "react";
import Hero from "../components/HomeComponents/Hero";
import EventDetails from "../components/HomeComponents/EventDetails";
import NomineeHighlights from "../components/HomeComponents/NomineeHighlights";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventDetails />
      <NomineeHighlights />
    </div>
  );
};

export default Home;
