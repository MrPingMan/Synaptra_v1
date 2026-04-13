import React from "react";
import CompanyHero from "./CompanyHero";
import WhoWeAre from "./WhoWeAre";
import Leadership from "./Leadership";
import TeamsIntro from "./TeamsIntro";
import TeamShowcase from "./TeamShowcase";
import MissionVision from "./MissionVision";
import CompanyCta from "./CompanyCta";

const CompanyPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Company hero section */}
      <CompanyHero />

      {/* About company section */}
      <WhoWeAre />

      {/* Leadership section */}
      <Leadership />

      {/* Teams introduction */}
      <TeamsIntro />

      {/* Team showcase cards */}
      <TeamShowcase />

      {/* Mission and vision section */}
      <MissionVision />

      {/* Company CTA section */}
      <CompanyCta />
    </div>
  );
};

export default CompanyPage;
