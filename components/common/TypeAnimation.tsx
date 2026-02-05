"use client";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import MarkdownRenderer from "./MarkdownRender";

export default function AnimatedSummary({ content }: { content: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="text-gray-300 mb-28">
      {!done ? (
        <TypeAnimation
          sequence={[content, 1000, () => setDone(true)]}
          wrapper="div"
          cursor={true}
          repeat={0}
          speed={90}
          className="prose prose-indigo"
        />
      ) : (
        <div className="prose prose-indigo">
          <MarkdownRenderer content={content} />
        </div>
      )}
    </div>
  );
}
