import React from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Upload_header = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800 animate-gradient-x">
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-6 py-2 bg-neutral-950 text-indigo-400 border border-indigo-500/30 rounded-full"
            >
              <Sparkles className="h-5 w-5 animate-pulse" />
              AI Powered Summaries
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400">
            Start Uploading Your PDFs
          </h1>

          {/* Description */}
          <p className="text-lg text-indigo-200 max-w-xl">
            Upload your PDF and let our AI do the magic ✨ Clean, concise, and
            instant summaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Upload_header;
