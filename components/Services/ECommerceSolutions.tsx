import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import ServiceSection from "./ServiceSection";

const ecommerceServices = [
  "Custom E-Commerce Platforms",
  "Payment Gateway Integration",
  "Product & Inventory Management",
  "Performance Optimization",
  "Customer Experience Enhancement",
];

const ECommerceSolutions = () => {
  return (
    <>
      {/* E-commerce services section */}
      <ServiceSection
        id="ecommerce-solutions"
        eyebrow="E-Commerce Solutions"
        heading="Commerce platforms built to convert, scale, and simplify operations"
        description="We help businesses build and scale powerful online stores with secure payment systems, optimized product experiences, and seamless integrations. Our e-commerce solutions are designed to maximize conversions and customer satisfaction."
        services={ecommerceServices}
        icon={LuShoppingBag}
        accentClasses={{
          eyebrow: "text-violet-200",
          card: "bg-slate-950/40",
          item: "border-violet-300/20 bg-violet-300/8",
        }}
      />
    </>
  );
};

export default ECommerceSolutions;
