import React from "react";
import { LuRocket, LuEye } from "react-icons/lu";

const MissionVision = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Mission and vision section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px]">
          {/* Mission header */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/12 ring-1 ring-cyan-200/20">
              <LuRocket className="h-7 w-7 text-cyan-200" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Mission
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Building technology that powers real business growth
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            To empower businesses with innovative, scalable, and future-ready
            technology solutions that drive digital transformation and growth.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/25 p-8 backdrop-blur-[6px]">
          {/* Vision header */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300/12 ring-1 ring-emerald-200/20">
              <LuEye className="h-7 w-7 text-emerald-200" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Vision
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Becoming a trusted global technology partner
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            To become a trusted global technology partner known for innovation,
            excellence, and impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
