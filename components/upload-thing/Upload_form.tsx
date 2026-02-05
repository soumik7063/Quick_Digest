"use client";
import React, { useEffect, useState } from "react";
import Upload_form_input from "./Upload_form_input";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generateResp, storePDF } from "@/actions/upload-action";
import AnimatedSummary from "../common/TypeAnimation";
import { useRouter } from "next/navigation";

const schema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 20 * 1024 * 1024, "Max 20MB allowed")
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "Only PDF files allowed",
    ),
});

const Upload_form = () => {
  const router = useRouter();
  const [output, setOutput] = useState("");
  const [generating, setGenerating] = useState(false);
  const { startUpload } = useUploadThing("pdfUploader");

  useEffect(() => {
    if (output) setGenerating(false);
  }, [output]);

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setGenerating(true);
      setOutput("");

      const file = new FormData(e.currentTarget).get("file");
      if (!(file instanceof File)) return;

      const valid = schema.safeParse({ file });
      if (!valid.success) {
        toast.error(valid.error.errors[0].message);
        // setGenerating(false);
        return;
      }

      const resp: any = await startUpload([file]);
      toast.success("Processing PDF…");

      const summary = await generateResp(resp);
      toast.success("✨ Generating response …");

      let storeResult: any;
      if (summary?.data) {
        toast.success("🗒️ Saving your PDF… Hold on tightly");

        storeResult = await storePDF({
          fileURL: resp[0].serverData.file.url,
          file_name: file.name,
          title: summary.data.title,
          summary_text: summary.data?.summary,
        });
      }
      setOutput(summary?.data?.summary as string);
      if (storeResult) {
        // console.log(storeResult);
        toast("✅ saved successfully");
      }
      router.push(`/summaries/${storeResult.data.id}?from=upload`);
    } catch (error) {
      // setGenerating(false);
      console.log("error occured: ", error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section className="relative text-indigo-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <Upload_form_input onSubmit={handelSubmit} />

        {generating && (
          <p className="text-indigo-400 animate-pulse">Generating summary…</p>
        )}

        {/* {output && (
          <div className="bg-neutral-900 border border-indigo-500/20 rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-indigo-400">
              Your PDF Summary
            </h2>
            <AnimatedSummary content={output} sumId={sumId} />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Upload_form;
