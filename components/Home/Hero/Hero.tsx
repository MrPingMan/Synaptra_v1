"use client";
import React from "react";
import NeuralBackground from "./NeuralBackground";
import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { BsStarHalf } from "react-icons/bs";

type HeroProps = {
  onOpenEnquiry: () => void;
};

const Hero = ({ onOpenEnquiry }: HeroProps) => {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex justify-center flex-col py-20 sm:py-16">
      {/* Neural Background */}
      <div className="absolute inset-0 -z-1">
        <NeuralBackground />
      </div>

      {/* Content */}
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 relative z-10">
        {/* Text Content */}
        <div data-aos="fade-up">
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            Welcome to Synaptra AI
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-white leading-[2.5rem] md:leading-[3.5rem]">
            Build, Launch and Scale Faster with{" "}
            <span className="text-fuchsia-500">Synaptra</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-white">
            Synaptra helps startups and businesses build scalable web applications, launch digital products faster, and accelerate growth with modern technology and data-driven strategies.
          </p>

          {/* Ratings */}
          {/* <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/google.png"
                alt="Google Logo"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <BsStarHalf className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-white text-sm sm:text-base">
                  Best Rated on Google
                </p>
              </div>
            </div>

            <div className="flex mt-6 sm:mt-0 items-center space-x-4">
              <Image
                src="/linkedin.png"
                alt="LinkedIn Logo"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
                    4.7
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <BsStarHalf className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-white text-sm sm:text-base">
                  Best Rated on LinkedIn
                </p>
              </div>
            </div>
          </div> */}

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* <a
              href="#_"
              className="relative px-10 py-3 font-medium text-white transition duration-300 bg-rose-400 rounded-md hover:bg-rose-700 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity="0"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity="0"
                  ></path>
                </svg>
              </span>
              <span className="relative">Get Free Trial</span>
            </a> */}

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="relative overflow-hidden rounded-full border border-cyan-200/20 bg-cyan-300 px-10 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2 opacity-70">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity="0"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3 opacity-70">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity="0"
                  ></path>
                </svg>
              </span>
              <span className="relative">Get Started</span>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block relative z-10 w-full max-w-[540px] xl:mt-10"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/15 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-4 backdrop-blur-[6px] shadow-2xl shadow-slate-950/20">
            <Image
              src="/img4.jpeg"
              alt="Synaptra hero visual"
              width={800}
              height={800}
              className="h-[440px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
