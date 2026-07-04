import { Globe, Layers, Target, Users } from "lucide-react";
import { valueProps } from "../data/portfolio";

const icons = [Layers, Target, Globe, Users];

export function WhyMe() {
  return (
    <section id="why-me" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Why me</span>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">Why teams hire me</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          You get a senior engineer who owns delivery — clear communication,
          honest estimates, and code your team can maintain.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {valueProps.map((prop, i) => {
            const Icon = icons[i];
            return (
              <article key={prop.title} className="glass-card glass-card-accent p-6">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {prop.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
