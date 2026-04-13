import React from "react";
import { IconType } from "react-icons";
import { LuCheck } from "react-icons/lu";

type ServiceSectionProps = {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  services: string[];
  icon: IconType;
  accentClasses: {
    eyebrow: string;
    card: string;
    item: string;
  };
  reverse?: boolean;
};

const ServiceSection = ({
  id,
  eyebrow,
  heading,
  description,
  services,
  icon: Icon,
  accentClasses,
  reverse = false,
}: ServiceSectionProps) => {
  return (
    <section id={id} className="scroll-mt-28 py-12 sm:py-16">
      {/* Service section container */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10 lg:p-14">
        <div
          className={`grid gap-10 lg:items-start ${
            reverse
              ? "lg:grid-cols-[0.95fr_1.05fr]"
              : "lg:grid-cols-[1.05fr_0.95fr]"
          }`}
        >
          {/* Service heading and description */}
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="flex items-center gap-4">
              {/* Service icon badge */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-lg shadow-black/10 transition-transform duration-300 will-change-transform group-hover:scale-105 ${accentClasses.card}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.3em] ${accentClasses.eyebrow}`}
              >
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
              {eyebrow} Services
            </h2>
            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>

          {/* Key services list */}
          <div
            className={`rounded-[1.5rem] p-6 ring-1 ring-white/10 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:ring-white/20 hover:shadow-2xl hover:shadow-cyan-950/20 ${
              reverse ? "lg:order-1" : ""
            } ${accentClasses.card}`}
          >
            <h3 className="text-lg font-semibold text-white">Key Services</h3>
            <div className="mt-5 grid gap-4">
              {services.map((service) => (
                /* Individual service item */
                <div
                  key={service}
                  className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium text-slate-100 transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:border-white/30 hover:shadow-lg hover:shadow-black/10 sm:text-base ${accentClasses.item}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <LuCheck className="h-4 w-4 text-white" />
                  </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
