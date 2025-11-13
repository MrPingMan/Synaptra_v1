import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type NavProp = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: NavProp) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/**Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[200] bg-black opacity-60 w-full h-screen`}
      ></div>
      {/**Nav Link */}
      <div
        className={`fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 text-white w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[300]`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/**Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
