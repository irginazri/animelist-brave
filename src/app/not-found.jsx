"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={40} className="text-me-white" />
        <h3 className="text-4xl text-me-white font-bold">Not Found</h3>
        <Link
          href="/"
          className="hover:bg-me-accent rounded-sm bg-me-primary p-2 text-me-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Page;
