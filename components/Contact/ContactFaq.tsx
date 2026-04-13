import React from "react";

const faqs = [
  {
    question: "How soon will we hear back?",
    answer: "Our team usually responds within 24 hours.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with startups, growing businesses, and enterprises.",
  },
  {
    question: "Do you provide consultation?",
    answer:
      "Yes. We provide technology consulting to help businesses choose the right solutions for their needs.",
  },
];

const ContactFaq = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* FAQ section */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            A few quick answers before we connect
          </h2>
        </div>

        {/* FAQ cards */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/25 p-6 backdrop-blur-[6px]"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
