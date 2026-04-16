"use client";

import React, { useState } from "react";

import ServiceHero from "./ServiceHero";
import WebDevelopment from "./WebDevelopment";
import MobileAppDevelopment from "./MobileAppDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import UiUxDesign from "./UiUxDesign";
import ECommerceSolutions from "./ECommerceSolutions";
import TechnologyConsulting from "./TechnologyConsulting";
import WhyChooseSynaptra from "./WhyChooseSynaptra";
import ServicesCta from "./ServicesCta";
import EnquiryPopup from "../Home/EnquiryPopup";

const ServicePage = () => {

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="overflow-hidden">

      <ServiceHero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <WebDevelopment />
      <MobileAppDevelopment />
      <DigitalMarketing />
      <UiUxDesign />
      <ECommerceSolutions />
      <TechnologyConsulting />

      <WhyChooseSynaptra />

      <ServicesCta onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <EnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

    </div>
  );
};

export default ServicePage;