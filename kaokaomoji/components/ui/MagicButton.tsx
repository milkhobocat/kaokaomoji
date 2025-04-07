"use client";
import React, { useState } from "react";

type MagicButtonProps = {
  children: React.ReactNode;
};

const MagicButton = ({ children }: MagicButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex h-12 items-center justify-center rounded-full bg-[#a5a4ed] px-3 py-1 text-sm font-medium text-white border-2 border-[#f7849b]"
    >
      {copied ? "Copied!" : children}
    </button>
  );
};

export default MagicButton;
