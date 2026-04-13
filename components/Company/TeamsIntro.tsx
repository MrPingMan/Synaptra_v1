import React from "react";

const TeamsIntro = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Teams intro section */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
          Our Expert Teams
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Cross-functional teams built to turn ideas into outcomes
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          At Synaptra, our strength lies in our talented teams who bring
          together expertise in development, design, and digital marketing
          to deliver innovative solutions for our clients.
        </p>
      </div>
    </section>
  );
};

export default TeamsIntro;
