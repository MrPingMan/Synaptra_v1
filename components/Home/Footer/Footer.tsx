import React from "react";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 text-slate-100">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/**1st grid */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Solution</h1>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Enterprise
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            By Workflow
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            By Team
          </p>
        </div>
        {/**2nd grid */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            About Us
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            News & Press
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Our Customer
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Leadership
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Careers
          </p>
        </div>
        {/**3rd grid */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Resources</h1>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Blog
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Webinar & Events
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            Podcast
          </p>
          <p className="text-slate-200 font-medium cursor-pointer text-sm hover:text-cyan-300">
            E-book & Guides
          </p>
        </div>
        {/**4th grid */}
        <div>
          <h1 className="text-lg font-bold text-white">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-slate-300">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-cyan-200 mt-1">
              +0123 4234943234
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-slate-300">Our Email</h1>
            <h1 className="text-base font-bold text-cyan-200 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/**bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-300 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Synaptra. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-0 md:mt-0">
          <span>Social :</span>
          <span className="text-slate-300 hover:text-cyan-300">
            <FaFacebook />
          </span>
          <span className="text-slate-300 hover:text-cyan-300">
            <FaTwitter />
          </span>
          <span className="text-slate-300 hover:text-cyan-300">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
