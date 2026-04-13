import React from "react";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactFormSection from "./ContactFormSection";
import ContactFaq from "./ContactFaq";
import ContactCta from "./ContactCta";

const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Contact hero section */}
      <ContactHero />

      {/* Contact information section */}
      <ContactInfo />

      {/* Contact form section */}
      <ContactFormSection />

      {/* FAQ section */}
      <ContactFaq />

      {/* Contact CTA section */}
      <ContactCta />
    </div>
  );
};

export default ContactPage;
