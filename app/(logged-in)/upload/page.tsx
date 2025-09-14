import Upload_form from "@/components/upload-thing/Upload_form";
import Upload_header from "@/components/upload-thing/Upload_header";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Upload_header />
      <Upload_form />
    </section>
  );
};

export default page;
