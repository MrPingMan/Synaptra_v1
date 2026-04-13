import Image from "next/image";
import React from "react";

type TeamCardProps = {
  title: string;
  lead: string;
  description: string;
  accent: string;
  imageSrc?: string;
};

const TeamCard = ({
  title,
  lead,
  description,
  accent,
  imageSrc,
}: TeamCardProps) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/25 p-8 backdrop-blur-[6px] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-white/20">
      {/* Team heading */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${accent}`}>
          Team
        </span>
      </div>

      {/* Team image */}
      {imageSrc ? (
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6">
          <Image
            src={imageSrc}
            alt={title}
            width={640}
            height={420}
            className="h-48 w-full object-cover"
          />
        </div>
      ) : null}

      {/* Team lead details */}
      <div className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            Lead
          </p>
          <p className="mt-2 text-base font-semibold leading-7 text-white break-words">
            {lead}
          </p>
        </div>
      </div>

      {/* Team description */}
      <p className="mt-6 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
};

export default TeamCard;
