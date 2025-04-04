import React from "react";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProductLogo from "../app-ui/product-logo";
import { ArrowUpRightIcon, CopyrightIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden lg:h-60 h-full flex size-full items-center justify-center">
      <div className="flex lg:flex-row md:flex-row flex-col size-full lg:items-end md:items-end h-fit justify-between lg:max-w-screen-xl gap-8 py-12 md:py-8 lg:py-4">
        <div className="flex flex-col gap-1">
          <FooterProductLogo />
          <p className="font-alegreya text-lg italic max-w-60 text-accent">
            Accelerate talent match, find right talents, amplify Quality
          </p>
          <p className=" text-white font-brand text-xs flex flex-1 gap-1 items-center font-medium pt-2">
            <CopyrightIcon strokeWidth={2} className="w-3.5 h-3.5 text-white" />
            2025 CVCompass | All rights reserved
          </p>
          <span className=" text-white font-brand text-xs flex flex-1 gap-1 items-center font-medium pt-2">
            Built and maintained by{" "}
            <a
              href="https://sayantanpaul.com/"
              className="text-accent underline"
              target="_blank"
            >
              @sayantanpaul
            </a>
          </span>
        </div>
        <FooterRoutes />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
        )}
      />
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default Footer;

const FooterProductLogo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col items-start gap-4 w-full cursor-pointer">
        <span className="h-8 w-8 select-none">
          <ProductLogo />
        </span>
        <p className={`font-brand select-none font-bold text-[16px]`}>
          CVCompass
        </p>
      </div>
    </Link>
  );
};

const FooterRoutes = () => {
  return (
    <div className="flex flex-row lg:gap-12 gap-8 items-start justify-between md:gap-12">
      <div>
        <h3 className="font-alegreya text-accent font-semibold text-lg ">
          About
        </h3>
        <ul className="flex flex-col gap-1.5 mt-2 font-alegreya text-base font-semibold ">
          <li>
            <Link
              href={"/development-insights"}
              className="underline-offset-1 hover:underline"
            >
              Insights
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/SayantanmPaul/cv-compass-client/issues/"
              target="_blank"
              className="flex flex-1 items-center underline-offset-1 hover:underline"
            >
              Bug Report <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://cvcompass-health.openstatus.dev/"
              target="_blank"
              className="flex flex-1 items-center underline-offset-1 hover:underline"
            >
              OpenStatus <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-alegreya text-accent font-semibold ">Product</h3>
        <ul className="flex flex-col gap-1.5 mt-2 font-alegreya text-base font-semibold">
          <li>
            <Link
              href={"/licence"}
              className="underline-offset-1 hover:underline"
            >
              Licence
            </Link>
          </li>
          <li>
            <Link
              href={"/privacy-policy"}
              className="underline-offset-1 hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href={"/terms-of-use"}
              className="underline-offset-1 hover:underline"
            >
              Terms of Use
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-alegreya text-accent font-semibold ">Contact </h3>
        <ul className="flex flex-col gap-1.5 mt-2 font-alegreya text-base font-semibold ">
          <li>
            <a
              href={"mailto:iam.paulsayantan06@gmail.com"}
              className="underline-offset-1 hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/imsayantanpaul/"
              target="_blank"
              className="flex flex-1 items-center underline-offset-1 hover:underline"
            >
              LinkedIn <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
