"use client";
import Image from "next/image";
import React from "react";
import NeuralBackground from "../Home/Hero/NeuralBackground";

const CompanyHero = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      {/* Hero neural background */}
      <div className="absolute inset-0 -z-10">
        <NeuralBackground />
      </div>

      {/* Company hero content */}
      <div className="w-[90%] md:w-[80%] mx-auto grid items-center gap-10 pt-28 pb-16 sm:pt-32 sm:pb-20 xl:grid-cols-2">
        {/* Hero text block */}
        <div className="max-w-4xl">
          <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.35em] text-cyan-200">
            About Synaptra
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Driving Innovation Through Technology
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Synaptra is a technology-driven company focused on delivering
            innovative digital solutions that empower businesses to grow,
            scale, and succeed in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Hero image panel */}
        <div className="relative mx-auto hidden w-full max-w-xl xl:block">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/15 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-4 backdrop-blur-[6px]">
            <Image
              src="/img1.jpg"
              alt="Synaptra company visual"
              width={760}
              height={760}
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
