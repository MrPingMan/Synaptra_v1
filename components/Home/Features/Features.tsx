import React from "react";
import Image from "next/image";
// import { GoWorkflow } from "react-icons/go";
// import { LuPen } from "react-icons/lu";
// import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";
import { LuLayers, LuCpu, LuPuzzle, LuUserCheck } from "react-icons/lu";
const Features = () => {
  return (
    <div className="pt-16 pb-16 bg-transparent">
      <div>
        <h1 className="text-center text-2xl text-blue-300 font-bold">
          Why Choose Synaptra?
        </h1>
        <p className="mt-3 text-center font-medium text-white w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          At Synaptra, we combine technical expertise, innovative thinking,
          and industry best practices to deliver digital solutions that
          drive measurable business growth. Our team focuses on building
          scalable, secure, and future-ready systems that empower businesses
          to succeed in the digital era.
        </p>
      </div>
      {/**Main Grid */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/**Inner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/**1st Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="bg-white p-4 rounded-lg h-full flex flex-col"
          >
            <div className="flex items-center space-x-3">
              {/**Icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-blue-500 bg-opacity-20">
                <LuUserCheck className="w-6 h-6 text-blue-400" />
              </div>
              {/**Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Expert-Led Teams
              </h1>
            </div>
            {/**Description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Every department at Synaptra is led by experienced professionals
              with deep industry knowledge and technical expertise.
            </p>
          </div>
          {/**2nd Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="bg-white p-4 rounded-lg h-full flex flex-col"
          >
            <div className="flex items-center space-x-3">
              {/**Icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-blue-500 bg-opacity-20">
                <LuPuzzle className="w-6 h-6 text-blue-400" />
              </div>
              {/**Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Custom-Built Solutions
              </h1>
            </div>
            {/**Description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              We don&apos;t believe in one-size-fits-all solutions. Every product
              and service is tailored to match your business needs.
            </p>
          </div>
          {/**3rd Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="bg-white p-4 rounded-lg h-full flex flex-col"
          >
            <div className="flex items-center space-x-3">
              {/**Icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-blue-500 bg-opacity-20">
                <LuCpu className="w-6 h-6 text-blue-400" />
              </div>
              {/**Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Future-Ready Technology
              </h1>
            </div>
            {/**Description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Our solutions are built using modern technologies to ensure
              your business stays competitive in a rapidly evolving market.
            </p>
          </div>
          {/**4th Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="bg-white p-4 rounded-lg h-full flex flex-col"
          >
            <div className="flex items-center space-x-3">
              {/**Icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-blue-500 bg-opacity-20">
                <LuLayers className="w-6 h-6 text-blue-400" />
              </div>
              {/**Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Scalable Architecture
              </h1>
            </div>
            {/**Description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              We design systems that grow with your business, ensuring
              performance, security, and reliability at every stage.
            </p>
          </div>
        </div>
        {/**Image Content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <Image
            src={"/f1.png"}
            alt={"feture image"}
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
