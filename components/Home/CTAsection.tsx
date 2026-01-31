import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Particles from "../ui/Particles";

const CTAsection = () => {
  return (
    <div>
      <div className=" w-full h-[400px] absolute">
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
      <section className=" overflow-hidden bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
            Ready to save hours of{" "}
            <span className="text-indigo-600">reading time?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Transform lengthy documents into clear, actionable insights using
            our AI-powered summarizer — faster, smarter, and effortless.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Button
              className="rounded-full px-8 py-6 text-base font-semibold
              bg-gradient-to-r from-rose-500 to-indigo-600
              hover:from-indigo-600 hover:to-rose-500
              shadow-lg transition-all duration-300"
            >
              <Link href="/upload" className="flex items-center gap-2">
                Get started
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTAsection;
