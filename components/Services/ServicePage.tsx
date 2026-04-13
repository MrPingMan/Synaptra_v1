import React from "react";
import ServiceHero from "./ServiceHero";
import WebDevelopment from "./WebDevelopment";
import MobileAppDevelopment from "./MobileAppDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import UiUxDesign from "./UiUxDesign";
import ECommerceSolutions from "./ECommerceSolutions";
import TechnologyConsulting from "./TechnologyConsulting";
import WhyChooseSynaptra from "./WhyChooseSynaptra";
import ServicesCta from "./ServicesCta";

const ServicePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Services hero section */}
      <ServiceHero />

      {/* Individual service sections */}
      <WebDevelopment />
      <MobileAppDevelopment />
      <DigitalMarketing />
      <UiUxDesign />
      <ECommerceSolutions />
      <TechnologyConsulting />

      {/* Credibility section before CTA */}
      <WhyChooseSynaptra />

      {/* Closing call-to-action */}
      <ServicesCta />
    </div>
  );
};

export default ServicePage;
