import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl gap-4">
      <div className="flex">
        <div className="relative px-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 gradient-x group">
          <Badge
            variant="secondary"
            className="relative px-6 py-2 text-base bg-white rounded-full group-hover:bg-gray-50  transition-colors duration-200 font-medium"
          >
            <Sparkles className="h-6 w-6 mr-2 animate-pulse text-rose-500" />
            <p className="text-base text-rose-600">Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold text-3xl text-center px-4">
        Transform PDF into
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        summaries
      </h1>
      <h2 className="text-gray-600 text-center px-4 lg:px-0 text-lg lg:max-w-4xl">
        Get a beautiful summary reel of the document in second
      </h2>
      <Button
        variant="link"
        className="bg-rose-500 text-white mt-5 rounded-full px-10 sm:px-10 bg-gradient-to-r from-slate-800 to-rose-500 decoration-0 hover:from-rose-500 hover:to-slate-800 hover:no-underline font-bold shadow-lg transition-all duration-300"
      >
        <Link href="/upload" className="flex items-center no-underline">
          <span className="text-md">Try Summarise</span>
          <ArrowRight className="animate-pulse ml-2" />
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
