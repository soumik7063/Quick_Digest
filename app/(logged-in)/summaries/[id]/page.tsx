import { getSummaryById } from "@/actions/get-summary";
import SourceInfo from "@/components/summary-card/SourceInfo";
import { SummaryHeader } from "@/components/summary-card/SummaryHeader";
import SummaryViewer from "@/components/summary-card/SummaryViewer";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const response = await getSummaryById(params.id);
  if (!response) {
    notFound();
  }
  const {
    title,
    file_name,
    original_file_url,
    summary_text,
    created_at,
    updated_at,
    word_count,
  } = response;
  const readingTime = Math.ceil(word_count / 200);
  //   console.log(response);
  return (
    <div className="relative isolate min-h-screen">
      <div className="mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <SummaryHeader
            title={title.slice(0, title.length - 4)}
            created_at={created_at}
            readingTime={readingTime}
          />
          {file_name && (
            <SourceInfo
              file_name={file_name}
              original_file_url={original_file_url}
              title={title}
              summary_text={summary_text}
              created_at={created_at}
            />
          )}
          <div className="relative mt-4 sm:mt-8 lg:mt-16">
            <div className="relative p-4 sm:p-6 lg:p-8 bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-indigo-300 transition-all duration-300 hover:shadow-2xl  max-w-4xl mx-auto">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-indigo-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600" />
                <p className="text-indigo-800">{word_count} words</p>
              </div>
              <div className="absolute top-2 sm:top-6 font-bold left-2 sm:left-8 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm  shadow-xs">
                <p className="text-indigo-300">Summary</p>
              </div>
              <div className=" mt-8 sm:mt-6 mx-auto max-w-4xl">
                <SummaryViewer summary={summary_text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
