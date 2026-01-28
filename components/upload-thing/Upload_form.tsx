"use client";
import React, { useEffect, useState } from "react";
import Upload_form_input from "./Upload_form_input";
import z from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generateResp } from "@/actions/upload-action";

function markdownToText(md: string) {
  return md.replace(/[#*_`>-]/g, "").replace(/\n{2,}/g, "\n");
}

const schema = z.object({
  file: z
    .instanceof(File, { message: "invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "file size must be less than 20MB",
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF",
    ),
});

const Upload_form = () => {
  const [output, setoutput] = useState("");
  const [generateing, setGenerating] = useState(false);

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("uploaded successfully!");
    },
    onUploadError: () => {
      toast.warning("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

  // ✅ FIX: useEffect must be here
  useEffect(() => {
    if (output) setGenerating(false);
  }, [output]);

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setGenerating(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFiled = schema.safeParse({ file });

    if (!validatedFiled.success) {
      toast.error(
        validatedFiled.error.flatten().fieldErrors.file?.[0] ?? "invalid file",
      );
      return;
    }

    toast.success("file is valid, uploading...");
    const resp = await startUpload([file]);

    if (!resp) {
      toast.error("upload failed, please try again");
      return;
    }

    toast.success("processing pdf, this may take a while...");
    const summary = await generateResp(resp);

    setoutput(markdownToText(summary?.data as string));
    console.log("summary", summary);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <Upload_form_input onSubmit={handelSubmit} />
      {generateing && <div className="loader text-center"></div>}
      {output && (
        <div className="flex flex-col mt-4 gap-10 p-8">
          <h1 className="text-center">
            Here is the crisp summary of this whole PDF
          </h1>
          <p>{output}</p>
        </div>
      )}
    </section>
  );
};

export default Upload_form;
