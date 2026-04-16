import React from "react";
import Image from "next/image";
import BoxText from "@/components/Helper/BoxText";

const About = () => {
  return (
    <div className="pt-8 pb-16 sm:pt-10">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/**Image Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="relative mx-auto w-full max-w-[540px]"
        >

          {/* Glow background */}
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/15 blur-3xl"></div>

          {/* Glass container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-4 backdrop-blur-[6px] shadow-2xl shadow-slate-950/20">

            <Image
              src="/about1.jpeg"
              alt="About Image"
              width={700}
              height={700}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />

          </div>
        </div>
        {/**Text Content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl  font-bold text-white mt-3 leading-[2.5rem] sm:leading-[3rem]">
            Building Digital Solutions That Drive Growth
          </h1>
          <p className="mt-3 leading-relaxed teaxt-sm sm:text-base text-white">


            At Synaptra, we don’t just build software - we build the future of your business.
            We are a team of dedicated engineers, strategists, and digital innovators focused
            on delivering high-impact IT solutions that bridge the gap between complex
            technology and seamless user experiences.

            Whether you’re a startup looking to launch your first product or an enterprise
            aiming to optimize operations, Synaptra provides the strategic tools, technical
            expertise, and innovation needed to help your business grow and scale confidently.          </p>
          <button className="mt-5 text-blue-200 hover:text-blue-400 font-bold pb-1 border-b-2 border-blue-200 hover:border-blue-400 ">
            Learn More &#8594;
          </button>
          <div className="mt-6 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-200 font-medium">
                &quot;Our mission is to empower businesses with technology that is
                powerful, scalable, and built for the future.&quot;
              </p>
              {/* <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/u1.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                   <p className="font-medium">Jessica Doe</p>
                  <p className="text-gray-700 text:sm">
                    Web Developer @Synaptra
                  </p> 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
