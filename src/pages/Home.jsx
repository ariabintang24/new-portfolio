import React from "react";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Teams from "../components/Teams";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <Services />
      <div id="our-work" className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-30">
        <OurWork showAll={false} hideTitle={false} />
      </div>
      <Teams />
      <ContactUs />
    </>
  );
};

export default Home;
