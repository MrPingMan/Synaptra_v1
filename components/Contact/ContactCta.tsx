import React from "react";

const ContactCta = () => {
  return (
    <section className="py-16 sm:py-20">
      {/* Contact CTA card */}
      <div className="w-[90%] md:w-[80%] mx-auto rounded-[2.25rem] border border-cyan-200/20 bg-gradient-to-r from-cyan-400/10 via-white/8 to-emerald-300/10 p-8 text-center backdrop-blur-[6px] sm:p-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          Partner with Synaptra to build innovative digital solutions that
          drive real business results.
        </p>
        <a
          href="#contact-form"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition will-change-transform hover:-translate-y-0.5 hover:bg-cyan-100 sm:text-base"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};

export default ContactCta;
