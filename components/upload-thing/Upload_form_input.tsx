"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface uploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Upload_form_input = ({ onSubmit }: uploadFormInputProps) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-4xl">
        <div className="flex justify-center gap-6">
          <Input
            className="border shadow bg-linear-to-r from-rose-300 via-rose-400 to-rose-500"
            type="file"
            id="file"
            name="file"
            accept="application/pdf"
            required
          />
          <Button>Upload PDF</Button>
        </div>
      </form>
    </div>
  );
};

export default Upload_form_input;
