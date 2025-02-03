"use client";

import { MoveLeftIcon } from "lucide-react";
import { ProductLogoWithName } from "../productLogoWithName";
import Link from "next/link";

export const ProductLegalNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <span className="min-w-5 h-5">
        <ProductLogoWithName />
      </span>
      <BackToHome />
    </div>
  );
};

const BackToHome = () => {
  return (
    <Link href="/" className="relative w-fit md:w-auto lg:w-auto group">
      <div className="font-secondary font-semibold text-xs relative text-white text-center group flex items-center justify-center gap-2 underline-offset-2  border border-white  py-2 px-4 w-40">
        <MoveLeftIcon
          strokeWidth={2}
          className="w-4 h-4 group-hover:mr-1 ease-in-out duration-200"
        />
        Back to home
      </div>
    </Link>
  );
};
