import SummaryCard from "@/components/summary-card/SummaryCard";
import { auth } from "@clerk/nextjs/server";
import { ArrowUp, ArrowUpRight, ArrowUpWideNarrow, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

import React from "react";
import { getSummaries } from "@/lib/summaries";

const DashboardPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const summaries = await getSummaries();
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
        {summaries.data.length === 0 ? (
          <div className="flex flex-col gap-4 items-center mx-auto">
            <p className="text-gray-400 font-semibold col-span-full text-center">
              No summaries yet 📄
            </p>
            <button>
              <Link
                href="/upload"
                className="flex text-[10px] sm:text-base items-center bg-linear-to-r from-indigo-400 to-indigo-700 px-1 sm:px-1 py-1 sm:py-1 rounded-lg"
              >
                <Plus className="h-4 w-4" /> Add summay
              </Link>
            </button>
          </div>
        ) : (
          summaries.data.map((item) => (
            <SummaryCard key={item.id} summary={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
