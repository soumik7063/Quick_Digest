"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import MarkdownRenderer from "./MarkdownRender";
import { useRouter } from "next/navigation";

export default function AnimatedSummary({
  content,
  sumId,
}: {
  content: string;
  sumId: string;
}) {
  const [done, setDone] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (done) {
      router.push(`/summaries/${sumId}`);
      return;
    }
  }, [done]);
  return (
    <div className="text-gray-300 mb-28">
      {!done ? (
        <TypeAnimation
          sequence={[content, () => setDone(true)]}
          speed={80}
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
