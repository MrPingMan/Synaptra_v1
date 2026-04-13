import React from "react";

const leaders = [
  {
    name: "Balaji V.",
    role: "Founder & CEO",
    description:
      "Balaji V. leads Synaptra with a vision of delivering innovative technology solutions that empower businesses and create impactful digital experiences.",
  },
  {
    name: "J. Suriya",
    role: "Co-Founder & Managing Director",
    description:
      "J. Suriya oversees strategic growth and operational excellence, ensuring Synaptra consistently delivers high-quality digital solutions to clients across industries.",
  },
];

const Leadership = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Leadership section */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Our Leadership
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Leadership focused on innovation, delivery, and long-term growth
          </h2>
        </div>

        {/* Leadership cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-[2rem] border border-white/10 bg-slate-950/25 p-8 backdrop-blur-[6px] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-slate-950/35"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Leadership
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {leader.name}
              </h3>
              <p className="mt-2 text-base font-medium text-cyan-200">
                {leader.role}
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
