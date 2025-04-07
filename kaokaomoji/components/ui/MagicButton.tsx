"use client"
import React from "react";
import { useState } from "react";

type MagicButtonProps = {
  children: React.ReactNode;
};

const MagicButton = ({ children }: MagicButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 1530); // Reset after 1.5s
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f7849b] focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f54266_0%,#E2CBFF_50%,#f54266_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#a5a4ed] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {copied ? "Copied!" : children}
      </span>
    </button>
  );
};

export default MagicButton;
