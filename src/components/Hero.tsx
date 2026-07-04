import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { heroBadges, personal, stats } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="avatar h-28 w-28 text-3xl md:h-32 md:w-32">
              {personal.initials}
            </div>
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#0f1419] bg-[#3fb950]" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-semibold tracking-tight text-[#e6edf3] sm:text-5xl">
              {personal.name}
            </h1>
            <p className="mt-2 text-lg text-muted">
              {personal.title} · {personal.subtitle}
            </p>
            <p className="mt-1 text-sm text-muted">
              {personal.totalExperience} total experience · {personal.experiencePeriod}
            </p>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm link-subtle"
            >
              <ExternalLink size={14} />
              linkedin.com/in/rahul-gautam-1bbb20136
            </a>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c9d1d9] sm:text-xl">
              {personal.heroTagline}
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-dim">
              {personal.heroTrust}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="pill">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
              {personal.pitch}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill">{personal.location}</span>
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
                className="inline-flex items-center gap-1.5 text-sm link-subtle"
              >
                <ExternalLink size={14} />
                Connect on LinkedIn
              </a>
              <a
                href={personal.resumeUrl}
                download="Rahul_Gautam_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-sm link-subtle"
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
              <p className="stat-value text-2xl font-semibold sm:text-3xl">{stat.value}</p>
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
