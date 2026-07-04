import { domains } from "../data/portfolio";

export function Domains() {
  return (
    <section aria-label="Domains" className="section-band px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
        {domains.map((domain, i) => (
          <span
            key={domain}
            className={i % 2 === 0 ? "pill" : "pill pill-violet"}
          >
            {domain}
          </span>
        ))}
      </div>
    </section>
  );
}
