"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
}

const SearchInput = ({ className }: Props) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Find pizza..."
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            "absolute w-full bg-white rounded-2xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          <Link
            className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
            href="/product/1"
          >
            <img
              className="rounded-sm h-8 w-8"
              src="https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp"
              alt="Pizza 1 "
            />
            <span>Pizza 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchInput;