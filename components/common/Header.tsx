"use client";
import { FileText } from "lucide-react";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <nav className="flex justify-between items-center py-4 lg:px-12 px-2 mx-auto">
      <div>
        <NavLink href="/" className="flex items-center gap-2 shrink-0">
          <FileText className="w-6 h-6 text-gray-900 hover:rotate-12 transition-all duration-300" />
          <span className="font-extrabold text-gray-900 lg:text-xl">
            Qucick Digest
          </span>
        </NavLink>
      </div>
      <div className="flex lg:items-center lg:gap-12 gap-4 lg:justify-center">
        <SignedOut>
          <NavLink href="/pricing">Pricing</NavLink>
        </SignedOut>
        <SignedIn>
          <NavLink href="/dashboard">Your summaries</NavLink>
        </SignedIn>
      </div>
      <div className="flex lg:justify-end">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a file</NavLink>
            <div>Pro</div>

            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-1 ">
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
