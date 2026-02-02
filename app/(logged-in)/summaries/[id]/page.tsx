import { getSummaryById } from "@/actions/get-summary";
import MarkdownRenderer from "@/components/common/MarkdownRender";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const response = await getSummaryById(params.id);
  //   console.log(response);
  return (
    <div className="flex flex-col justify-center items-center">
      {!response.success ? (
        <div className="bg-rose-300 text-red-500">
          <p>something went wrong</p>
        </div>
      ) : (
        <div className="my-2 max-w-4xl bg-neutral-900 border border-indigo-500/20 rounded-xl p-8 space-y-6">
          <h2 className=" text-2xl font-bold text-indigo-400 text-center">
            Your PDF Summary
          </h2>
          {Array.isArray(response.data) && (
            <div className="sm:px-12 text-center">
              <MarkdownRenderer
                content={response.data[0].summary_text as string}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
