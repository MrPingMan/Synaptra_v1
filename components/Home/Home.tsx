"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Features from "./Features/Features";
import Services from "./Services/Services";
// import ClientReview from "./ClientReview/ClientReview";
// import Team from "./Team/Team";
// import PriceList from "./PriceList/PriceList";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Services />
      {/* <ClientReview /> */}
      {/* <Team /> */}
      {/* <PriceList /> */}
    </div>
  );
};

export default Home;
