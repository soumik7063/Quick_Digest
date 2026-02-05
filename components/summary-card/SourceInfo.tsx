import { Download, ExternalLink, FileText } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { DownloadSummaryButton } from "./Download-Summary";

const SourceInfo = ({
  file_name,
  original_file_url,
  title,
  summary_text,
  created_at,
}: {
  file_name: string;
  original_file_url: string;
  title: string;
  summary_text: string;
  created_at: Date;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-indigo-600" />
        <span className="text-indigo-300">Source: {file_name}</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-indigo-300 hover:text-indigo-300 bg-neutral-900  hover:bg-neutral-800"
          asChild
        >
          <a href={original_file_url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3 text-indigo-400" />
            View Original File
          </a>
        </Button>
        <DownloadSummaryButton
          title={title}
          summary_text={summary_text}
          created_at={created_at}
          file_name={file_name}
        />
      </div>
    </div>
  );
};

export default SourceInfo;
