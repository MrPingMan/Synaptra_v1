"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant/constant";

import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const services = navLinks.find((link) => link.label === "Services")?.children;

  return (
    <footer className="pt-20 pb-10 text-slate-100">

      {/* MAIN FOOTER CONTAINER */}
      <div className="w-[85%] mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COMPANY INFO */}
          <div className="space-y-5">

            {/* Logo */}
            <Image
              src="/synaptra-logo.svg"
              alt="Synaptra Logo"
              width={150}
              height={40}
            />

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              Synaptra is a technology-driven company delivering innovative
              digital solutions that help businesses build, scale, and succeed
              in a rapidly evolving digital world.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2 text-lg">

              <a className="p-2 bg-white/10 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                <FaLinkedin />
              </a>

              <a className="p-2 bg-white/10 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                <FaInstagram />
              </a>

              <a className="p-2 bg-white/10 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                <FaTwitter />
              </a>

              <a className="p-2 bg-white/10 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                <FaGithub />
              </a>

            </div>
          </div>


          {/* QUICK LINKS */}
          <div className="space-y-5">

            <h2 className="text-lg font-semibold text-white">
              Quick Links
            </h2>

            {/* List container for spacing */}
            <div className="flex flex-col gap-3">

              {navLinks.map((link) => (
                <Link key={link.id} href={link.url}>
                  <p className="text-sm text-slate-300 hover:text-cyan-300 transition cursor-pointer">
                    {link.label}
                  </p>
                </Link>
              ))}

            </div>

          </div>



          {/* SERVICES */}

          <div className="space-y-5">

            <h2 className="text-lg font-semibold text-white">
              Services
            </h2>

            {/* List container for spacing */}
            <div className="flex flex-col gap-3">

              {services?.map((service) => (
                <Link key={service.id} href={service.url}>
                  <p className="text-sm text-slate-300 hover:text-cyan-300 transition cursor-pointer">
                    {service.label}
                  </p>
                </Link>
              ))}

            </div>

          </div>


          {/* CONTACT INFO */}

          <div className="space-y-5">

            <h2 className="text-lg font-semibold text-white">
              Contact Info
            </h2>

            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-cyan-300 font-medium">
                +91 98400 23195
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-cyan-300 font-medium">
                synaptrait@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-slate-300 text-sm">
                Chennai, Tamil Nadu, India
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Business Hours</p>
              <p className="text-slate-300 text-sm">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

          </div>
        </div>


        {/* BOTTOM FOOTER */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">

          <p>
            © {new Date().getFullYear()} Synaptra. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="/privacy">
              <p className="hover:text-cyan-300 transition cursor-pointer">
                Privacy Policy
              </p>
            </Link>

            <Link href="/terms">
              <p className="hover:text-cyan-300 transition cursor-pointer">
                Terms of Service
              </p>
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;