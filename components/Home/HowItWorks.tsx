import {
  BrainCircuit,
  FileOutput,
  FileText,
  Key,
  MoveRight,
} from "lucide-react";
import React, { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};
const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description: "Our Advanced AI processed and analyze your document",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear consise summary of your document",
  },
];
const HowItWorks = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 bg-gray-50">
        <div>
          <h1>How it Works</h1>
          <h3>
            Transform any pdf into easy digest summary in three simple steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={idx}>
              <StepItem {...step} />
              <div>
                <MoveRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepItem = ({ icon, label, description }: Step) => {
  return (
    <div>
      <div>{icon}</div>
      <div>
        <h1>{label}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default HowItWorks;
