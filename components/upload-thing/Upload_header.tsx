import React from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ShinyText from "../ui/ShinyText";
import Particles from "../ui/Particles";

const Upload_header = () => {
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
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="flex flex-col items-center gap-6">
            {/* Badge */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800 animate-gradient-x">
              <Badge
                variant="secondary"
                className="flex items-center gap-2 px-6 py-2 bg-neutral-950 text-indigo-400 border border-indigo-500/30 rounded-full"
              >
                <Sparkles className="h-6 w-6 animate-pulse" />
                <p className="font-semibold animate-pulse text-md">
                  AI Powered Summaries
                </p>
              </Badge>
            </div>

            {/* Heading */}
            {/* <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400">
            Start Uploading Your PDFs
          </h1> */}
            <ShinyText
              className="text-3xl sm:text-4xl font-extrabold"
              text="Start Uploading Your PDFs"
              speed={2}
              delay={0}
              color="#5C6BC0"
              shineColor="#B2BEB5"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
            {/* Description */}
            <p className="text-lg text-indigo-200 max-w-xl">
              Upload your PDF and let our AI do the magic ✨ Clean, concise, and
              instant summaries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upload_header;
