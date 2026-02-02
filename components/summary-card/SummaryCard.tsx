import React from "react";
import { Card, CardTitle } from "../ui/card";
import { NotebookIcon, Trash2 } from "lucide-react";
import Deletebutton from "./Delete-button";

const SummaryCard = ({ summary }: { summary: any }) => {
  // console.log(summary);
  return (
    <Card className="relative px-2 bg-indigo-50">
      <div className="flex gap-2">
        <NotebookIcon />
        <div className="flex flex-col">
          <CardTitle>{summary.title}</CardTitle>
          <p className="text-xs">
            {new Date(summary.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="line-clamp-2 pl-2 text-xs">{summary.summary_text}</p>
      <button className="ml-3 rounded-2xl px-3 text-sm py-1 bg-green-200 text-green-700 w-fit">
        {summary.status}
      </button>
      <div className="absolute top-2 right-0">
        <Deletebutton summaryId={summary.id} />
      </div>
    </Card>
  );
};

export default SummaryCard;
