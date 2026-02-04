"use client";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

export default function AnimatedSummary({
  content,
  sumId,
}: {
  content: string;
  sumId: string;
}) {
  const router = useRouter();

  return (
    <div className="text-gray-300 mb-28">
      {
        <TypeAnimation
          sequence={[content, () => router.replace(`/summaries/${sumId}`)]}
          speed={80}
          wrapper="div"
          cursor={true}
          className="whitespace-pre-wrap leading-relaxed"
        />
      }
    </div>
  );
}
