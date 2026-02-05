"use client";
import React from "react";
import MarkdownRenderer from "../common/MarkdownRender";
import AnimatedSummary from "../common/TypeAnimation";
import { useSearchParams } from "next/navigation";

const SummaryViewer = ({ summary }: { summary: string }) => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  console.log("from: ", from);
  return (
    <div className="text-gray-300 prose prose-indigo">
      {from === "upload" ? (
        <AnimatedSummary content={summary} />
      ) : (
        <MarkdownRenderer content={summary} />
      )}
    </div>
  );
};

export default SummaryViewer;
