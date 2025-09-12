import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTAsection = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 bg-gray-50">
        <h2>Ready to save hours of Reading Time?</h2>
        <p>
          Transform lengthy documents into clear , actionable insights with our
          AI powered summarizer
        </p>
      </div>
      <Button
        variant="link"
        className="bg-rose-500 text-white mt-5 rounded-full px-10 sm:px-10 bg-gradient-to-r from-slate-800 to-rose-500 decoration-0 hover:from-rose-500 hover:to-slate-800 hover:no-underline font-bold shadow-lg transition-all duration-300"
      >
        <Link href="/upload" className="flex items-center no-underline">
          <span className="text-md">Get started</span>
          <ArrowRight className="animate-pulse ml-2" />
        </Link>
      </Button>
    </section>
  );
};

export default CTAsection;
