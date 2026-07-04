import { proofProjects } from "../data/portfolio";

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Work</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">Proof recruiters ask about</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Enterprise-scale delivery for Fortune 500 clients — where reliability,
          security, and performance are non-negotiable.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {proofProjects.map((project) => (
            <article
              key={project.name}
              className="project-card glass-card glass-card-accent flex flex-col p-6"
            >
              <span className="project-tag pill mb-4 w-fit text-[0.65rem]">
                {project.tag}
              </span>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="client-label mt-1 text-sm">{project.client}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 font-mono text-[0.65rem] text-indigo-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
