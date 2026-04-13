"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { FaRegUser,FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


type NavProp = {
  openNav: () => void;
};
const Nav = ({ openNav }: NavProp) => {
  const [expanded, setExpanded] = useState(false);
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      else setNavbg(false); // fix
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navbg ? "bg-white shadow:md" : "fixed"
      } duration-200 h-[10vh] z-[100] fixed w-full`}
    >
      <div className="flex justify-between items-center text-white px-8 md:px-32 py-4 bg-blue-900">
        {/**Left Logo */}
        <div className="flex items-center justify-start w-full lg:w-auto">
          <Image
            src="/synaptra-logo.svg"
            alt="Synaptra Logo"
            width={150}
            height={150}
            className="object-contain transition-transform duration-300 hover:scale-110"
          ></Image>
        </div>
        {/**Nav Link */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            if(link.children){
            return (
              <div key={link.id} className="relative group">
                <Link
                  href={link.url}
                  className="flex items-center gap-2 text-white font-sans text-xl hover:text-indigo-700 hover:text-2xl hover:bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 transition-all duration-200 px-4 py-2 rounded-md cursor-pointer"
                >
                  {link.label}
                  <FaChevronDown className="w-3 h-3 text-white" />
                </Link>
                {/**Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-60 rounded-md bg-white shadow-lg opacity-0 invisible pointer-events-none transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                  {link.children.map((child) => (
                    <Link
                      href={child.url}
                      key={child.id}
                      className="block px-5 py-3 text-gray-700 text-sm hover:bg-blue-50 hover:text-blue-600 transition first:rounded-t-lg last:rounded-b-lg"
                    >
                      {child.label} 
                    </Link>
                  ))}
                </div>
              </div>
            );
          } 
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white hover:text-indigo-700 font-sans text-xl hover:text-2xl hover:bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 transition-all duration-200 px-4 py-2 rounded-md"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/**Buttons Menu */}
        <div className="flex items-center justify-end gap-4">
          {/* Profile button — visible only on large screens */}
          <div className="hidden lg:flex">
            <button
              onClick={() => setExpanded(!expanded)}
              className={`user-toggle items-center justify-center rounded-full w-16 h-16 shadow-lg hover:scale-110 transition ${
                expanded ? "nav-expanded" : ""
              }`}
            >
              <FaRegUser className="user-eye" />
            </button>
          </div>

          {/* Burger Menu — visible only on small/medium screens */}
          <div className="flex lg:hidden">
            <button
              onClick={() => {
                setExpanded(!expanded);
                openNav();
              }}
              className={`user-toggle items-center justify-center rounded-full w-16 h-16 shadow-lg hover:scale-110 transition ${
                expanded ? "nav-expanded" : ""
              }`}
            >
              <GiHamburgerMenu
                className={`user-eye ${expanded ? "spin-once" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
