import SummaryCard from "@/components/summary-card/SummaryCard";
import { ArrowUp, ArrowUpRight, ArrowUpWideNarrow, Plus } from "lucide-react";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="min-h-screen text-white mt-10 px-5 sm:px-20">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl sm:text-3xl">Your summaries</h1>
          <p className="text-gray-500 sm:text-sm text-xs">
            Transform your pdf into consize, actionableinsights
          </p>
        </div>
        <button>
          <Link
            href="/upload"
            className="flex text-sm sm:text-base items-center bg-linear-to-r from-indigo-400 to-indigo-700 px-1 sm:px-2 py-1 sm:py-2 rounded-lg"
          >
            <Plus /> New summary
          </Link>
        </button>
      </div>
      <p className="w-fit text-xs py-1 px-2 rounded-lg mt-4 bg-indigo-200 text-rose-700">
        You have reached the limit of 5 uploads on the Basic plan{" "}
        <Link href="/pricing" className="underline cursor-pointer">
          click here to upgrade to Pro
        </Link>
        <ArrowUpRight className="h-4 w-4 inline-block" /> to unlimited uploads
      </p>
      <div className="mt-10 grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
};

export default page;
