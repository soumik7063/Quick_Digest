import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import React, { ReactNode } from "react";
import Particles from "../ui/Particles";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={48} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload.",
  },
  {
    icon: <BrainCircuit size={48} strokeWidth={1.5} />,
    label: "AI Analysis",
    description: "Our advanced AI analyzes and understands your document.",
  },
  {
    icon: <FileOutput size={48} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear, concise, and easy-to-read summary.",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <div className="h-screen w-full absolute">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <section className=" bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-white/10 text-gray-300">
              🧠 How It Works
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Summarize Any PDF in
              <span className="block text-indigo-400">Three Simple Steps</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
              Transform long and complex PDFs into easy-to-digest summaries
              using our AI-powered workflow.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <StepItem {...step} />

                {/* Arrow (desktop only) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 text-gray-600">
                    <MoveRight size={28} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const StepItem = ({ icon, label, description }: Step) => {
  return (
    <div
      className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center
                    hover:border-indigo-500/40 hover:bg-white/10 transition"
    >
      {/* Icon */}
      <div className="flex justify-center mb-5 text-indigo-400">{icon}</div>

      {/* Text */}
      <h3 className="text-xl font-semibold mb-2">{label}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default HowItWorks;
