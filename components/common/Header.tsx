import Link from "next/link";
import { FileText } from "lucide-react";
import NavLink from "./NavLink";
export default function Header() {
  const IsLoggedin = false;
  return (
    <nav className="flex justify-between items-center py-4 lg:px-12 px-2 mx-auto">
      <div>
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <FileText className="w-6 h-6 text-gray-900 hover:rotate-12 transition-all duration-300" />
          <span className="font-extrabold text-gray-900 lg:text-xl">
            Qucick Digest
          </span>
        </Link>
      </div>
      <div className="flex lg:items-center lg:gap-12 gap-4 lg:justify-center">
        {IsLoggedin ? (
          <Link href="#pricing">Pricing</Link>
        ) : (
          <Link href="/dashboard">Your summaries</Link>
        )}
      </div>
      <div className="flex lg:justify-end">
        {IsLoggedin ? (
          <div className="flex gap-2 items-center">
            <Link href="/upload">Upload a file</Link>
            <div>Pro</div>
            <button>sign-out</button>
          </div>
        ) : (
          <div>
            <NavLink href="#sign-in" className="">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}