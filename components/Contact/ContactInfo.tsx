import React from "react";
import { LuClock3, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const contactItems = [
  {
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    icon: LuPhone,
    accent: "text-cyan-200 bg-cyan-300/12 ring-cyan-200/20",
  },
  {
    label: "Email",
    value: "contact@synaptra.com",
    icon: LuMail,
    accent: "text-emerald-200 bg-emerald-300/12 ring-emerald-200/20",
  },
  {
    label: "Business Hours",
    value: "Monday - Friday : 9:00 AM - 6:00 PM",
    icon: LuClock3,
    accent: "text-amber-200 bg-amber-300/12 ring-amber-200/20",
  },
  {
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    icon: LuMapPin,
    accent: "text-violet-200 bg-violet-300/12 ring-violet-200/20",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Contact information section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Contact section intro */}
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Get In Touch
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s talk about your next digital project
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Our team is here to answer your questions, discuss your project,
            and help you find the best digital solutions for your business.
          </p>
        </div>

        {/* Contact details cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/25 p-6 backdrop-blur-[6px]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${item.accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-white">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
