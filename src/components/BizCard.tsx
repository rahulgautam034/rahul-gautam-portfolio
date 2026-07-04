import { ArrowRight, Code2, FileText, Mail, User, Workflow } from "lucide-react";
import { personal } from "../data/portfolio";

type Props = {
  onOpen: () => void;
};

export function BizCard({ onOpen }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <button type="button" onClick={onOpen} className="biz-card-shell cursor-pointer">
        <div className="biz-card-inner">
          <div className="relative mx-auto mb-5 h-24 w-24">
            <div className="avatar-ring h-full w-full">
              <div className="avatar-inner text-2xl">{personal.initials}</div>
            </div>
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#0f172a] bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </div>

          <h1 className="mb-1 text-2xl font-bold text-white">{personal.name}</h1>
        <p className="mb-1 text-sm text-muted">
          {personal.title} · {personal.subtitle}
        </p>
        <p className="mb-5 text-xs font-medium text-emerald-400">
          {personal.totalExperience} · {personal.experiencePeriod}
        </p>

          <div className="mb-5 flex justify-center gap-2">
            {[Code2, Workflow, FileText, User].map((Icon, i) => (
              <span key={i} className="icon-chip">
                <Icon size={16} />
              </span>
            ))}
          </div>

          <span className="pill mb-5">{personal.availability}</span>

          <span className="btn-primary mx-auto w-full">
            View portfolio
            <ArrowRight size={16} />
          </span>

          <p className="mt-4 text-xs text-dim">
            Click the card to explore projects, experience & contact
          </p>
        </div>
      </button>

      <div className="mt-6 flex gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="link-pill"
          onClick={(e) => e.stopPropagation()}
        >
          <Mail size={14} className="mr-1.5 inline" />
          Email
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-pill"
          onClick={(e) => e.stopPropagation()}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
