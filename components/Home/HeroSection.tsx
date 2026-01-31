import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Particles from "../ui/Particles";

const HeroSection = () => {
  return (
    <div>
      <div className="h-screen w-full absolute">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          // moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}

          <div className="flex justify-center mb-10">
            <Badge className="px-6 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-full border-2  border-green-400 flex items-center gap-2">
              <Sparkles className="w-6 h-6 animate-pulse" />
              Powered by AI
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200 leading-tight">
            Transform PDFs into{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-2 text-indigo-600">
                concise
              </span>
              <span
                className="absolute inset-0 bg-indigo-100 -rotate-2 rounded-md"
                aria-hidden
              />
            </span>{" "}
            summaries
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Upload any document and get a clean, easy-to-read summary in seconds
            — perfect for studying, work, and quick reviews.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              className="rounded-full px-8 py-6 text-base font-semibold
              bg-gradient-to-r from-indigo-600 to-indigo-500
              hover:from-indigo-500 hover:to-indigo-600
              shadow-lg transition-all"
            >
              <Link
                href="/upload"
                className="flex items-center gap-2 cursor-pointer"
              >
                <p className="block">Try Summarise</p>
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
