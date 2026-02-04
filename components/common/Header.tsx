"use client";

import { FileText, Hamburger } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ShinyText from "../ui/ShinyText";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleBtn = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <NavLink href="/" className="flex items-center gap-2 shrink-0">
          <FileText className="w-6 h-6 text-indigo-400 transition-transform hover:rotate-12" />
          {/* <span className="font-extrabold text-indigo-400 text-lg lg:text-xl">
            Quick Digest
          </span> */}
          <ShinyText
            className="font-extrabold text-lg lg:text-xl"
            text="Quick Digest"
            speed={2}
            delay={0}
            color="#5C6BC0"
            shineColor="#9FA8DA"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
        </NavLink>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <SignedOut>
            <NavLink
              href="/pricing"
              className=" text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Pricing
            </NavLink>
          </SignedOut>

          <SignedIn>
            <NavLink href="/dashboard">
              <span className=" text-indigo-400 font-semibold hover:text-indigo-300">
                Your summaries
              </span>
            </NavLink>
          </SignedIn>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <>
              <NavLink
                href="/upload"
                className="hidden sm:block px-4 py-2 rounded-lg bg-indigo-500 text-white 
                           hover:bg-indigo-600 transition text-sm font-medium"
              >
                Upload PDF
              </NavLink>

              <span
                className="hidden sm:inline-block px-2 py-1 text-xs rounded-full 
                               bg-indigo-500/20 text-indigo-400"
              >
                Pro
              </span>
              <UserButton />
              <button onClick={toggleBtn} className="relative sm:hidden">
                <FaHamburger className="text-white h-6 w-6" />
              </button>
            </>
          </SignedIn>

          <SignedOut>
            <NavLink
              href="/sign-in"
              className="px-4 py-2 rounded-lg bg-white/10 text-white 
                         hover:bg-white/20 transition text-sm font-medium"
            >
              Sign In
            </NavLink>
          </SignedOut>
        </div>
      </div>
      <div
        className={`bg-neutral-800 absolute h-[80px] w-full top-0
        ${open ? "translate-y-0" : "-translate-y-[100px]"}
        transform ease-in-out duration-500`}
      >
        <SignedIn>
          <div className="flex justify-between px-4 pt-6">
            <NavLink href="/dashboard">
              <span
                onClick={() => setOpen(false)}
                className=" text-indigo-400 text-lg font-semibold hover:text-indigo-300"
              >
                Your summaries
              </span>
            </NavLink>
            <RxCross2
              onClick={toggleBtn}
              className="text-white h-6 w-6 relative"
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
