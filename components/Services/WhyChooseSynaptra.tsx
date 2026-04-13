import React from "react";
import { LuBadgeCheck, LuBriefcaseBusiness, LuLayers3, LuRocket } from "react-icons/lu";

const reasons = [
  {
    title: "Experienced Engineering Teams",
    icon: LuBadgeCheck,
  },
  {
    title: "Scalable Modern Architecture",
    icon: LuLayers3,
  },
  {
    title: "Industry-Focused Digital Solutions",
    icon: LuBriefcaseBusiness,
  },
  {
    title: "End-to-End Project Delivery",
    icon: LuRocket,
  },
];

const WhyChooseSynaptra = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Credibility section */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2rem] border border-white/10 bg-slate-950/20 p-8 backdrop-blur-[6px] sm:p-10">
        {/* Credibility heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Why Businesses Choose Synaptra
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Trusted teams, practical strategy, and delivery built to scale
          </h2>
        </div>

        {/* Credibility points grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 text-slate-100 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/12 ring-1 ring-cyan-200/20">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <p className="text-sm font-medium leading-6 sm:text-base">
                  {reason.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSynaptra;
