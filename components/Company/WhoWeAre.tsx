import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-10 sm:py-14">
      {/* About company section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 items-center gap-10 rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-[6px] sm:p-10 lg:grid-cols-2 lg:p-14">
        {/* Company image */}
        <div className="flex justify-center" data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/img34.jpeg" alt="About Synaptra" width={620} height={620} className="h-auto w-full max-w-md rounded-[1.5rem] object-cover" />
        </div>

        {/* Company copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Building future-ready digital solutions with purpose
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            At Synaptra, we believe technology should empower businesses to
            achieve their full potential. Our team of passionate engineers,
            designers, and strategists work together to create impactful
            digital solutions.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            From startups launching their first product to enterprises
            optimizing their digital infrastructure, Synaptra delivers
            scalable, secure, and future-ready solutions tailored to each
            client&apos;s needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
