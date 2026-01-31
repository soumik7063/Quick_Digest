"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Upload_form_input = ({ onSubmit }: UploadFormInputProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-6"
    >
      <Input
        type="file"
        name="file"
        accept="application/pdf"
        required
        className="max-w-sm cursor-pointer bg-neutral-900 text-indigo-300 border border-indigo-500/30 file:text-indigo-400"
      />

      <Button
        className="rounded-full px-8 bg-gradient-to-r from-indigo-500 to-indigo-700
        hover:from-indigo-600 hover:to-indigo-800 transition-all"
      >
        Upload PDF
      </Button>
    </form>
  );
};

export default Upload_form_input;
