import React from "react";
import { LuLightbulb } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const consultingServices = [
  "Technology Strategy Planning",
  "System Architecture Design",
  "Digital Transformation Consulting",
  "Technology Stack Selection",
  "Business Process Optimization",
];

const TechnologyConsulting = () => {
  return (
    <>
      {/* Technology consulting services section */}
      <ServiceSection
        id="technology-consulting"
        eyebrow="Technology Consulting"
        heading="Strategic technology guidance for smarter, future-ready decisions"
        description="Our technology consultants guide businesses in selecting the right tools, architecture, and digital strategies to build future-ready solutions. We help you make informed decisions that align technology with your business objectives."
        services={consultingServices}
        icon={LuLightbulb}
        reverse
        accentClasses={{
          eyebrow: "text-sky-200",
          card: "bg-slate-950/25",
          item: "border-sky-300/20 bg-sky-300/8",
        }}
      />
    </>
  );
};

export default TechnologyConsulting;
