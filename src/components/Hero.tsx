import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { heroBadges, personal, stats } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-28">
      <div className="hero-bg" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="avatar-ring h-28 w-28 md:h-32 md:w-32">
              <div className="avatar-inner text-3xl">{personal.initials}</div>
            </div>
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-[#070b14] bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="mt-2 text-lg text-slate-300">
              {personal.title} · {personal.subtitle}
            </p>
            <p className="mt-1 text-sm font-medium text-emerald-400/90">
              {personal.totalExperience} Total Experience · {personal.experiencePeriod}
            </p>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-sm text-cyan-400/80 transition-colors hover:text-cyan-300"
            >
              <ExternalLink size={14} />
              linkedin.com/in/rahul-gautam-1bbb20136
            </a>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              {personal.heroTagline}
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-violet-300/70">
              {personal.heroTrust}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroBadges.map((badge, i) => (
                <span
                  key={badge}
                  className={i % 2 === 0 ? "pill" : "pill pill-violet"}
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
              {personal.pitch}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill pill-amber">{personal.location}</span>
              <span className="pill">{personal.availabilityDetail}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Start a conversation
                <ArrowRight size={16} />
              </a>
              <a href="#work" className="btn-secondary">
                See proof of work
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-violet-400/90 underline underline-offset-4 transition-colors hover:text-violet-300"
              >
                <ExternalLink size={14} />
                Connect on LinkedIn
              </a>
              <a
                href={personal.resumeUrl}
                download="Rahul_Gautam_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400/80 underline underline-offset-4 transition-colors hover:text-cyan-300"
              >
                <Download size={14} />
                Download résumé (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
