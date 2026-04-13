import React from "react";
import { LuSmartphone } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const mobileServices = [
  "Android App Development",
  "iOS App Development",
  "Cross-Platform Apps",
  "UI/UX Focused Mobile Interfaces",
  "App Performance Optimization",
];

const MobileAppDevelopment = () => {
  return (
    <>
      {/* Mobile app development services section */}
      <ServiceSection
        id="mobile-app-development"
        eyebrow="Mobile App Development"
        heading="Mobile products designed for performance and smooth user journeys"
        description="We develop intuitive and high-performing mobile applications designed to deliver exceptional user experiences. Whether it's Android, iOS, or cross-platform development, our apps are built for speed, scalability, and seamless performance."
        services={mobileServices}
        icon={LuSmartphone}
        reverse
        accentClasses={{
          eyebrow: "text-emerald-200",
          card: "bg-slate-950/25",
          item: "border-emerald-300/20 bg-emerald-300/8",
        }}
      />
    </>
  );
};

export default MobileAppDevelopment;
