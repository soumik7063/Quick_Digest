import React from 'react'
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const Upload_header = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-24 ">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="relative p-[2px] bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 rounded-full w-fit animate-gradient-x group">
            <Badge
              variant="secondary"
              className="relative px-6 py-2 text-base bg-white rounded-full group-hover:bg-gray-50  transition-colors duration-200 font-medium"
            >
              <Sparkles className="h-6 w-6 mr-2 animate-pulse text-rose-500" />
              <p className="text-base text-rose-600">
                AI Powered content creation
              </p>
            </Badge>
          </div>
          <h1>Start Uploading your PDFs</h1>
          <p>Upload your PDF and let our AI to do the magic !! ✨</p>
          <p>Upload PDF</p>
        </div>
      </div>
    </section>
  )
}

export default Upload_header