import React from "react";
import BoxText from "../../Helper/BoxText";
// import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
// import { MdOutlineDesignServices } from "react-icons/md";
// import { IoColorPaletteOutline } from "react-icons/io5";
import { LuScreenShare, LuSmartphone, LuTrendingUpDown, LuFigma, LuShoppingBag, LuLightbulb } from "react-icons/lu";
const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <BoxText>Our Services</BoxText>
        {/**heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-blue-300">
          Our Core Services
        </h1>
        {/**description */}
        <p className="mt-4 w-full sm:w-[80%] m:w-[70%] lg:e-[60%] xl:w-[50%] text-gray-200">
          Synaptra delivers powerful technology solutions designed to help
          businesses innovate, grow, and stay ahead in the digital era.
          Our specialized teams focus on building scalable applications,
          creating engaging digital experiences, and implementing
          data-driven marketing strategies.
        </p>
        {/**grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/**1st service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuScreenShare className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white"> Web Development</p>
              <p className="text-sm text-gray-200">
                We build secure, scalable, and high-performance web applications
                designed to deliver seamless user experiences and robust backend
                architecture.
              </p>
            </div>
          </div>
          {/**2nd service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuSmartphone className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white">Mobile App Development</p>
              <p className="text-sm text-gray-200">
                Our team creates intuitive mobile applications for iOS, Android,
                and cross-platform platforms with smooth performance and modern UI.
              </p>
            </div>
          </div>
          {/**3rd service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuTrendingUpDown className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white">Digital Marketing</p>
              <p className="text-sm text-gray-200">
                Grow your brand with data-driven marketing strategies including
                SEO, performance marketing, and social media engagement.
              </p>
            </div>
          </div>
          {/**4th service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuFigma className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white">UI / UX Design</p>
              <p className="text-sm text-gray-200">
                We design user-focused digital experiences that combine aesthetics,
                usability, and functionality to maximize engagement.
              </p>
            </div>
          </div>
          {/**5th service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuShoppingBag className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white">
                E-Commerce Solutions
              </p>
              <p className="text-sm text-gray-200">
                Launch and scale your online store with secure payment systems,
                optimized product experiences, and seamless integrations.
              </p>
            </div>
          </div>
          {/**6th service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
            className="flex items-center space-x-5"
          >
            {/**icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-blue-300 bg-opacity-60">
              <LuLightbulb className="w-16 h-6 text-blue-100" />
            </div>
            {/**text */}
            <div>
              <p className="text-lg font-bold text-white">
                Technology Consulting
              </p>
              <p className="text-sm text-gray-300">
                Our experts help businesses choose the right technologies,
                architecture, and strategies to build future-ready digital systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
