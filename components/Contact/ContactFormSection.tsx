 "use client";
import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const services = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "UI / UX Design",
  "E-Commerce Solutions",
  "Technology Consulting",
];

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-200/40 focus:ring-2 focus:ring-cyan-200/15 sm:text-base";

const ContactFormSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-10 sm:py-14">
      {/* Contact form section */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Send Us a Message
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tell us about your project and goals
          </h2>
        </div>

        {/* Contact form */}
        <form className="mt-8 grid gap-5 md:grid-cols-2">
          <input type="text" name="fullName" placeholder="Full Name" className={inputClassName} />
          <input type="email" name="email" placeholder="Email Address" className={inputClassName} />
          <input type="tel" name="phone" placeholder="Phone Number" className={inputClassName} />
          <input type="text" name="company" placeholder="Company Name" className={inputClassName} />
          <div ref={dropdownRef} className="relative">
            <input type="hidden" name="service" value={selectedService} />
            <button
              type="button"
              onClick={() => setIsDropdownOpen((open) => !open)}
              className={`${inputClassName} flex items-center justify-between pr-5 text-left ${
                selectedService ? "text-white" : "text-slate-400"
              }`}
            >
              <span>{selectedService || "Service Interested In"}</span>
              <LuChevronDown
                className={`h-5 w-5 text-cyan-200 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen ? (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-2xl border border-white/10 bg-slate-800/95 p-2 shadow-2xl backdrop-blur-md">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => {
                      setSelectedService(service);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm transition sm:text-base ${
                      selectedService === service
                        ? "bg-cyan-500 text-white"
                        : "text-slate-200 hover:bg-cyan-500 hover:text-white"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div className="hidden md:block"></div>
          <textarea
            name="message"
            placeholder="Project Details / Message"
            rows={6}
            className={`${inputClassName} md:col-span-2 resize-none`}
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex rounded-full bg-cyan-300 px-8 py-4 text-sm font-semibold text-slate-950 transition will-change-transform hover:-translate-y-0.5 hover:bg-cyan-200 sm:text-base"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
