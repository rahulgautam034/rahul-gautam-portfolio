import { credentials } from "../data/portfolio";

export function Credentials() {
  return (
    <section className="section-glow px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Credentials</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-text-warm">Certifications & education</span>
        </h2>
        <p className="mt-3 text-muted">
          Verified credentials and academic background
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {credentials.map((cred, i) => (
            <article
              key={cred.title}
              className="glass-card glass-card-accent p-6"
              style={{
                borderColor:
                  i === 0
                    ? "rgba(34, 211, 238, 0.25)"
                    : i === 1
                      ? "rgba(167, 139, 250, 0.25)"
                      : "rgba(251, 191, 36, 0.25)",
              }}
            >
              <h3 className="font-semibold">{cred.title}</h3>
              <p
                className="mt-1 text-sm"
                style={{
                  color:
                    i === 0 ? "#22d3ee" : i === 1 ? "#a78bfa" : "#fbbf24",
                }}
              >
                {cred.org}
              </p>
              <p className="mt-3 text-sm text-muted">{cred.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
