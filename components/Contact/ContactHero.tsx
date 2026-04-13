"use client";
import React from "react";
import NeuralBackground from "../Home/Hero/NeuralBackground";

const ContactHero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      {/* Hero neural background */}
      <div className="absolute inset-0 -z-10">
        <NeuralBackground />
      </div>

      {/* Contact hero content */}
      <div className="w-[90%] md:w-[80%] mx-auto pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Hero text block */}
        <div className="max-w-4xl">
          <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Contact Us
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Start Building Something Great Together
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Have a project idea or looking for the right technology partner?
            Get in touch with Synaptra and our team will help turn your vision
            into powerful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
