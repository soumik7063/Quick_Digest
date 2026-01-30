import React from "react";

const DemoSection = () => {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="text-center space-y-6">
          {/* Badge */}
          <span
            className="inline-block px-4 py-1 text-sm font-medium rounded-full 
                           bg-white/10 text-gray-300"
          >
            ⚡ Live Demo
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Turn Long PDFs into
            <span className="block text-indigo-400">
              Clear, Readable Summaries
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            Watch how{" "}
            <span className="text-white font-medium">Quick Digest</span>{" "}
            transforms a JavaScript course PDF into a clean, structured, and
            easy-to-understand summary in seconds.
          </p>

          {/* Optional CTA */}
          <div className="pt-4">
            <button
              className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 
                         transition font-medium text-white shadow-lg shadow-indigo-500/20"
            >
              ▶ Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
