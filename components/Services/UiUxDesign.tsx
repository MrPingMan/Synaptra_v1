import React from "react";
import { LuFigma } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const uiUxServices = [
  "User Experience Research",
  "Wireframing & Prototyping",
  "User Interface Design",
  "Product Design Systems",
  "Design Optimization",
];

const UiUxDesign = () => {
  return (
    <>
      {/* UI / UX design services section */}
      <ServiceSection
        id="ui-ux-design"
        eyebrow="UI / UX Design"
        heading="Digital experiences shaped around clarity, usability, and delight"
        description="We design digital experiences that are visually appealing, intuitive, and user-centered. Our design approach focuses on improving usability, engagement, and overall customer satisfaction."
        services={uiUxServices}
        icon={LuFigma}
        reverse
        accentClasses={{
          eyebrow: "text-rose-200",
          card: "bg-slate-950/25",
          item: "border-rose-300/20 bg-rose-300/8",
        }}
      />
    </>
  );
};

export default UiUxDesign;
