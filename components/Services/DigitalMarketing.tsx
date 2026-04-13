import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const digitalMarketingServices = [
  "Search Engine Optimization (SEO)",
  "Performance Marketing",
  "Social Media Marketing",
  "Content Marketing",
  "Brand Growth Strategy",
];

const DigitalMarketing = () => {
  return (
    <>
      {/* Digital marketing services section */}
      <ServiceSection
        id="digital-marketing"
        eyebrow="Digital Marketing"
        heading="Data-driven campaigns that expand reach and accelerate growth"
        description="Our digital marketing experts help businesses grow their online presence and reach the right audience through data-driven strategies. From SEO to performance marketing and social media campaigns, we ensure your brand achieves measurable results."
        services={digitalMarketingServices}
        icon={LuTrendingUpDown}
        accentClasses={{
          eyebrow: "text-amber-200",
          card: "bg-slate-950/40",
          item: "border-amber-300/20 bg-amber-300/8",
        }}
      />
    </>
  );
};

export default DigitalMarketing;
