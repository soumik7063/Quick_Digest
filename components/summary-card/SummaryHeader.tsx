"use client";
import { Calendar, ChevronLeft, Clock, Sparkle } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";
export const SummaryHeader = ({
  title,
  created_at,
  readingTime,
}: {
  title: string;
  created_at: Date;
  readingTime: number;
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3">
          <Badge>
            <Sparkle className="text-indigo-400" />
            AI Powered
          </Badge>
          <div className="bg-neutral-900 px-2 rounded-md text-gray-100 font-semibold flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3 text-indigo-400" />
            {new Date(created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="bg-neutral-900 px-2 rounded-md text-gray-100 font-semibold flex items-center gap-2 text-xs">
            <Clock className="h-3 w-3 text-indigo-400" />
            {readingTime} min read
          </div>
        </div>
        <div>
          <Link
            href="/dashboard"
            className="text-sm text-indigo-400 hover:underline"
          >
            <Button
              className="bg-neutral-800 cursor-pointer font-semibold text-indigo-300 text-xs sm:text-sm"
              variant="link"
            >
              <ChevronLeft />
              {isMobile ? "Back" : "Back to Dashboard"}
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="mt-6 text-2xl sm:text-4xl font-bold text-gray-200">
        <span className="bg-linear-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
    </>
  );
};
