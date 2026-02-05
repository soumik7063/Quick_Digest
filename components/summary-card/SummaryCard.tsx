"use client";
import React from "react";
import { Card, CardTitle } from "../ui/card";
import { NotebookIcon, Trash2 } from "lucide-react";
import Deletebutton from "./Delete-button";
import { useRouter } from "next/navigation";
function formatTitle(title: string): string {
  return title.slice(0, title.lastIndexOf(".")) || title;
}
const SummaryCard = ({ summary }: { summary: any }) => {
  // console.log(summary);
  const router = useRouter();
  return (
    <Card className="relative px-2 bg-indigo-50">
      <div className="flex gap-2">
        <NotebookIcon className="h-8 w-8" />
        <div className="flex flex-col">
          <CardTitle>{formatTitle(summary.title)}</CardTitle>
          <p className="text-xs">
            {new Date(summary.created_at).toLocaleDateString()}
          </p>
        </div>
        <div className="relative -top-2 right-0">
          <Deletebutton summaryId={summary.id} />
        </div>
      </div>
      <p
        onClick={() => router.push(`/summaries/${summary.id}?from=dashboard`)}
        className="line-clamp-2 pl-2 text-xs cursor-pointer"
      >
        {summary.summary_text}
      </p>
      <button className="ml-3 rounded-2xl px-3 text-sm py-1 bg-green-200 text-green-700 w-fit">
        {summary.status}
      </button>
    </Card>
  );
};

export default SummaryCard;
