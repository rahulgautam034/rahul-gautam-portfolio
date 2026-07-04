import { education, languages, personal } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="section-band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">About</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">About me</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {personal.summary}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-dim">
          {personal.totalExperience} ({personal.experiencePeriod}) across tax compliance,
          fraud prevention, e-commerce, and field service. FSE III Accredited · B.E. Computer Science.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-5 py-4">
          <p className="text-3xl font-bold text-cyan-400">{personal.totalExperience}</p>
          <div>
            <p className="text-sm font-medium text-slate-200">Total professional experience</p>
            <p className="text-xs text-dim">{personal.experiencePeriod}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-semibold text-cyan-400">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm text-muted">
                  {lang.name} · {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-semibold text-violet-400">Now</h3>
            <p className="text-sm text-muted">
              Senior Software Engineer @ Wipro Limited
            </p>
            <p className="mt-1 text-xs text-dim">{personal.availabilityDetail}</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-semibold text-amber-400">Education</h3>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item.degree} className="text-sm text-muted">
                  <span className="text-slate-200">{item.degree}</span>
                  <br />
                  {item.institution} · {item.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
