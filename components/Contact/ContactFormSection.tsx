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
  const [loading, setLoading] = useState(false);
  const [messageUI, setMessageUI] = useState("");

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[0-9]{10}$/.test(phone);

  /* Scroll to message when it appears */
  useEffect(() => {
    if (messageUI && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [messageUI]);

  /* Close dropdown when clicking outside */
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="contact-form" className="py-10 sm:py-14">
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10 lg:p-12">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Send Us a Message
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tell us about your project and goals
          </h2>
        </div>

        {/* Message UI */}
        {messageUI && (
          <div
            ref={messageRef}
            className="mt-6 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200"
          >
            {messageUI}
          </div>
        )}

        <form
          className="mt-8 grid gap-5 md:grid-cols-2"
          onSubmit={async (e) => {
            e.preventDefault();
            if (loading) return;

            const form = e.currentTarget;
            const formData = new FormData(form);

            const fullName =
              formData.get("fullName")?.toString().trim() || "";
            const email =
              formData.get("email")?.toString().trim() || "";
            const phone =
              formData.get("phone")?.toString().trim() || "";
            const company =
              formData.get("company")?.toString().trim() || "";
            const project =
              formData.get("message")?.toString().trim() || "";

            /* Validation */

            if (!fullName) {
              setMessageUI("⚠ Please enter your Full Name");
              return;
            }

            if (!email) {
              setMessageUI("⚠ Please enter your Email Address");
              return;
            }

            if (!validateEmail(email)) {
              setMessageUI("⚠ Please enter a valid Email Address");
              return;
            }

            if (!phone) {
              setMessageUI("⚠ Please enter your Phone Number");
              return;
            }

            if (!validatePhone(phone)) {
              setMessageUI("⚠ Phone number must be 10 digits");
              return;
            }

            if (!company) {
              setMessageUI("⚠ Please enter your Company Name");
              return;
            }

            if (!selectedService) {
              setMessageUI("⚠ Please select a Service");
              return;
            }

            if (!project) {
              setMessageUI("⚠ Please enter your Project Details");
              return;
            }

            const data = {
              fullName,
              email,
              phone,
              company,
              service: selectedService,
              message: project,
            };

            setLoading(true);

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            setLoading(false);

            if (res.ok) {
              setMessageUI("✅ Message sent successfully!");
              form.reset();
              setSelectedService("");

              setTimeout(() => {
                setMessageUI("");
              }, 3000);
            } else {
              setMessageUI("❌ Something went wrong. Please try again.");
            }
          }}
        >

          {/* Full Name */}
          <input
            name="fullName"
            placeholder="Full Name"
            className={inputClassName}
            onChange={() => setMessageUI("")}
          />

          {/* Email */}
          <input
            name="email"
            placeholder="Email Address"
            className={inputClassName}
            onChange={() => setMessageUI("")}
          />

          {/* Phone */}
          <input
            name="phone"
            placeholder="Phone Number"
            className={inputClassName}
            onChange={() => setMessageUI("")}
          />

          {/* Company */}
          <input
            name="company"
            placeholder="Company Name"
            className={inputClassName}
            onChange={() => setMessageUI("")}
          />

          {/* Service Dropdown */}
          <div ref={dropdownRef} className="relative">
            <input type="hidden" name="service" value={selectedService} />

            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setMessageUI("");
              }}
              className={`${inputClassName} flex items-center justify-between pr-5 text-left ${selectedService ? "text-white" : "text-slate-400"
                } ${loading ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span>{selectedService || "Service Interested In"}</span>

              <LuChevronDown
                className={`h-5 w-5 text-cyan-200 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-2xl border border-white/10 bg-slate-800/95 p-2 shadow-2xl backdrop-blur-md">

                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setSelectedService(service);
                      setIsDropdownOpen(false);
                      setMessageUI("");
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${selectedService === service
                      ? "bg-cyan-500 text-white"
                      : "text-slate-200 hover:bg-cyan-500 hover:text-white"
                      }`}
                  >
                    {service}
                  </button>
                ))}

              </div>
            )}
          </div>

          <div className="hidden md:block"></div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Project Details / Message"
            rows={6}
            className={`${inputClassName} md:col-span-2 resize-none`}
            onChange={() => setMessageUI("")}
          />

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex rounded-full px-8 py-4 text-sm font-semibold transition
              ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-cyan-300 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;