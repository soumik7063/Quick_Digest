import React from "react";
import { Card, CardTitle } from "../ui/card";
import { NotebookIcon, Trash2 } from "lucide-react";

const SummaryCard = () => {
  return (
    <Card className="relative px-2 bg-indigo-50">
      <div className="flex gap-2">
        <NotebookIcon />
        <div className="flex flex-col">
          <CardTitle>PDF title</CardTitle>
          <p className="text-xs">14 minitus ago</p>
        </div>
      </div>
      <p>summary text ...</p>
      <button className="ml-3 rounded-2xl px-3 text-sm py-1 bg-green-200 text-green-700 w-fit">
        completed
      </button>
      <Trash2 className="absolute right-3 top-5 cursor-pointer" />
    </Card>
  );
};

export default SummaryCard;
