"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuX } from "react-icons/lu";

type EnquiryPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const services = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "UI / UX Design",
  "E-Commerce Solutions",
  "Technology Consulting",
];

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-200/40 focus:ring-2 focus:ring-cyan-200/15 sm:text-base";

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[0-9]{10}$/.test(phone);

  /* Scroll to message */

  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [message]);

  /* Lock body scroll */

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /* Close dropdown outside */

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center px-4 py-6">

      {/* BACKDROP */}

      <button
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
      />

      {/* POPUP */}

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 px-5 py-5 shadow-2xl backdrop-blur-md sm:px-6 sm:py-6">

        {/* CLOSE */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/6 p-2 text-slate-200 hover:bg-white/10"
        >
          <LuX className="h-5 w-5" />
        </button>

        {/* HEADER */}

        <div className="pr-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Quick Enquiry
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Tell us what you&apos;re building
          </h2>
        </div>

        {/* MESSAGE */}

        {message && (
          <div
            ref={messageRef}
            className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200"
          >
            {message}
          </div>
        )}

        {/* FORM */}

        <form
          className="mt-5 grid gap-4 md:grid-cols-2"
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

            if (!fullName) {
              setMessage("⚠ Please enter your Full Name");
              return;
            }

            if (!email) {
              setMessage("⚠ Please enter your Email Address");
              return;
            }

            if (!validateEmail(email)) {
              setMessage("⚠ Please enter a valid Email Address");
              return;
            }

            if (!phone) {
              setMessage("⚠ Please enter your Phone Number");
              return;
            }

            if (!validatePhone(phone)) {
              setMessage("⚠ Phone number must be 10 digits");
              return;
            }

            if (!company) {
              setMessage("⚠ Please enter your Company Name");
              return;
            }

            if (!selectedService) {
              setMessage("⚠ Please select a Service");
              return;
            }

            if (!project) {
              setMessage("⚠ Please enter your Project Details");
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
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            setLoading(false);

            if (res.ok) {
              setMessage("✅ Enquiry sent successfully!");

              form.reset();
              setSelectedService("");

              setTimeout(() => {
                setMessage("");
                onClose();
              }, 2000);
            } else {
              setMessage("❌ Something went wrong. Please try again.");
            }
          }}
        >

          <input
            name="fullName"
            placeholder="Full Name"
            className={inputClassName}
            onChange={() => setMessage("")}
          />

          <input
            name="email"
            placeholder="Email Address"
            className={inputClassName}
            onChange={() => setMessage("")}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className={inputClassName}
            onChange={() => setMessage("")}
          />

          <input
            name="company"
            placeholder="Company Name"
            className={inputClassName}
            onChange={() => setMessage("")}
          />

          {/* DROPDOWN */}

          <div ref={dropdownRef} className="relative md:col-span-2">

            <input type="hidden" name="service" value={selectedService} />

            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setMessage("");
              }}
              className={`${inputClassName} flex items-center justify-between pr-5 ${selectedService ? "text-white" : "text-slate-400"
                } ${loading ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span>{selectedService || "Service Interested In"}</span>

              <LuChevronDown
                className={`h-5 w-5 text-cyan-200 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-2xl border border-white/10 bg-slate-800/95 shadow-2xl backdrop-blur-md overflow-hidden">

                {/* Scroll container */}
                <div className="max-h-44 overflow-y-auto custom-scrollbar p-2">

                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        setSelectedService(service);
                        setIsDropdownOpen(false);
                        setMessage("");
                      }}
                      className={`w-full rounded-xl px-4 py-3 text-left transition
          ${selectedService === service
                          ? "bg-cyan-500 text-white"
                          : "text-slate-200 hover:bg-cyan-500 hover:text-white"
                        }`}
                    >
                      {service}
                    </button>
                  ))}

                </div>
              </div>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Project Details / Message"
            rows={4}
            className={`${inputClassName} resize-none md:col-span-2`}
            onChange={() => setMessage("")}
          />

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`rounded-full px-7 py-3 text-sm font-semibold transition
              ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                }`}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;