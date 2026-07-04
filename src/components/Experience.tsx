import { experience, personal } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Experience</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-text-warm">{personal.totalExperience} of delivery</span>
        </h2>
        <p className="mt-2 text-sm text-muted">
          Cumulative experience since {personal.experienceSince} · {personal.experiencePeriod}
        </p>

        <div className="mt-12 space-y-4">
          {experience.map((job) => (
            <article key={job.company} className="timeline-card">
              <div>
                <p className="font-mono text-sm text-violet-300/80">{job.period}</p>
                <p className="mt-1 text-xs text-cyan-400/70">{job.duration}</p>
                {job.current && (
                  <span className="pill mt-2 text-[0.65rem] !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-300">
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {job.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
