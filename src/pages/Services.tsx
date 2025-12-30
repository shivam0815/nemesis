import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DotGrid from "../components/DotGrid";

function Card({
  title,
  desc,
  to,
}: {
  title: string;
  desc: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-3xl bg-white/10 border border-white/15 p-6 shadow-soft hover:bg-white/12 transition"
    >
      <div className="text-xl font-extrabold tracking-tight">{title}</div>
      <div className="mt-2 text-white/75">{desc}</div>
      <div className="mt-5 inline-flex items-center gap-2 font-bold">
        Open <ArrowRight size={18} className="group-hover:translate-x-0.5 transition" />
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B4FA8] to-[#083B7E]" />
      <DotGrid className="absolute top-14 right-10 h-36 w-36" opacity={0.18} />

      <section className="relative mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Placement-oriented training programs designed for interview readiness and practical job skills.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <Card
            title="HR Training"
            desc="Recruitment, onboarding, HR operations, HRMS basics, compliance overview, interview preparation."
            to="/services/hr-training"
          />
          <Card
            title="Customer Care Training"
            desc="Communication, objection handling, ticketing process, CRM basics, call etiquette, role plays."
            to="/services/customer-training"
          />
        </div>
      </section>
    </main>
  );
}
