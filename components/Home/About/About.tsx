import React from "react";
import Image from "next/image";
import BoxText from "@/components/Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/**Image Content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/about.png" alt="About Image" width={600} height={600} />
        </div>
        {/**Text Content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl  font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
            Everything You Need To Grow Your Business
          </h1>
          <p className="mt-3 leading-relaxed teaxt-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
            dicta ipsum, quod animi nulla modi earum nostrum, eius magni nemo
            debitis, porro consequatur illum illo culpa distinctio? Quidem,
            animi?
          </p>
          <button className="mt-5 text-blue-800 font-bold pb-1 border-b-2 border-blue-800">
            Learn More &#8594;
          </button>
          <div className="mt-6 border-l-2 border-gray-500">
            <div className="ml-6">
              <p className="text-gray-700 font-medium">
                &quot; The many integrations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>
              <div className="flex items-center space-x-6 mt-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
