import React from "react";
import TeamCard from "./TeamCard";

const TeamShowcase = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* Team showcase section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-6 xl:grid-cols-3">
        <TeamCard
          title="Web Development Team"
          lead="Hari Prasath"
          description="Our web development division focuses on building high-speed, secure, and responsive web applications. We prioritize user-centric design and robust backend architecture to help businesses thrive in the digital age."
          accent="bg-cyan-300/12 text-cyan-200"
          imageSrc="/img17.jpeg"
        />
        <TeamCard
          title="Mobile App Development Team"
          lead="Gokula Vasan"
          description="We specialize in creating seamless mobile experiences across Android, iOS, and cross-platform technologies. Our team builds intuitive applications that deliver excellent performance and modern user interfaces."
          accent="bg-emerald-300/12 text-emerald-200"
          imageSrc="/img2.jpeg"
        />
        <TeamCard
          title="Digital Marketing Team"
          lead="Rohan Prasath A."
          description="Our marketing experts help businesses grow through data-driven strategies. From SEO and performance marketing to social media engagement, we ensure brands reach their target audience and convert leads into loyal customers."
          accent="bg-amber-300/12 text-amber-200"
          imageSrc="/img13.jpeg"
        />
        <TeamCard
          title="UI / UX Design Team"
          lead="Sam Sathiya Nesan E.S."
          description="Our UI/UX design team focuses on creating intuitive, engaging, and visually appealing digital experiences that enhance usability and customer satisfaction."
          accent="bg-rose-300/12 text-rose-200"
          imageSrc="/img21.jpeg"
        />
        <TeamCard
          title="E-Commerce Solutions Team"
          lead="Ravi"
          description="Our e-commerce team builds scalable online platforms designed to deliver seamless shopping experiences, secure payment systems, and optimized product management."
          accent="bg-violet-300/12 text-violet-200"
          imageSrc="/img23.jpeg"
        />
        <TeamCard
          title="Technology Consulting Team"
          lead="Kowshik"
          description="Our technology consulting team helps businesses choose the right technology stack, architecture, and strategies to build future-ready digital systems."
          accent="bg-sky-300/12 text-sky-200"
          imageSrc="/img7.jpeg"
        />
      </div>
    </section>
  );
};

export default TeamShowcase;
