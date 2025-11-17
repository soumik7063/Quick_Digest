"use client";
import React from "react";
import Upload_form_input from "./Upload_form_input";
import z from "zod";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({
  file: z
    .instanceof(File, { message: "invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "file size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});
const Upload_form = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    const validatedFiled = schema.safeParse({ file });
    console.log(validatedFiled);
    if (!validatedFiled.success) {
      console.log(
        validatedFiled.error.flatten().fieldErrors.file?.[0] ?? "invalid file"
      );
      return;
    }
    // console.log("submitted");

    // validating the file using ZOD
    // schema with zod
    // upload the file into uploadthing

    const resp = await startUpload([file]);
    if (!resp) return;
    //parse the PDF using langchain
    // summarise the PDF using AI
    // save the summary into database
    // redirect to the [id] summary page
  };
  return (
    <section className="max-w-7xl mx-auto">
      <Upload_form_input onSubmit={handelSubmit} />
    </section>
  );
};

export default Upload_form;
