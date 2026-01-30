"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import MarkdownRenderer from "./MarkdownRender";

export default function AnimatedSummary({ content }: { content: string }) {
  const [done, setDone] = useState(false);

  return (
    <div className="text-gray-300 mb-28">
      {!done ? (
        <TypeAnimation
          sequence={[content, () => setDone(true)]}
          speed={99}
          wrapper="div"
          cursor={true}
          className="whitespace-pre-wrap leading-relaxed"
        />
      ) : (
        <MarkdownRenderer content={content} />
      )}
    </div>
  );
}
