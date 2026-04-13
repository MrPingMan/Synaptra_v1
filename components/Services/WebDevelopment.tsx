import React from "react";
import { LuScreenShare } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const webServices = [
  "Custom Web Application Development",
  "SaaS Platform Development",
  "Enterprise Web Solutions",
  "API Development & Integration",
  "Website Performance Optimization",
];

const WebDevelopment = () => {
  return (
    <>
      {/* Web development services section */}
      <ServiceSection
        id="web-development"
        eyebrow="Web Development"
        heading="Scalable web platforms built for reliability and growth"
        description="Our web development team builds secure, scalable, and high-performance applications tailored to meet your business goals. From modern startup platforms to enterprise-grade systems, we create web solutions that deliver speed, reliability, and seamless user experiences."
        services={webServices}
        icon={LuScreenShare}
        accentClasses={{
          eyebrow: "text-cyan-200",
          card: "bg-slate-950/40",
          item: "border-cyan-300/20 bg-cyan-300/8",
        }}
      />
    </>
  );
};

export default WebDevelopment;
