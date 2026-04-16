"use client";

import React, { useState } from "react";

import CompanyHero from "./CompanyHero";
import WhoWeAre from "./WhoWeAre";
import Leadership from "./Leadership";
import TeamsIntro from "./TeamsIntro";
import TeamShowcase from "./TeamShowcase";
import MissionVision from "./MissionVision";
import CompanyCta from "./CompanyCta";
import EnquiryPopup from "../Home/EnquiryPopup";

const CompanyPage = () => {

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="overflow-hidden">

      <CompanyHero />

      <WhoWeAre />

      <Leadership />

      <TeamsIntro />

      <TeamShowcase />

      <MissionVision />

      {/* CTA */}
      <CompanyCta onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Popup */}
      <EnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

    </div>
  );
};

export default CompanyPage;