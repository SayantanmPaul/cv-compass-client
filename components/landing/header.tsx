import { ProductLogoWithName } from "@/components/app-ui/productLogoWithName";
import ConfirmRedirect from "../app-ui/confirm-redirect-dialog";
import Image from "next/image";
import Link from "next/link";

const HeaderComp = () => {
  const navOptionsClass =
    "hover:underline hover:font-semibold hover:text-slate-50 no-underline underline-offset-2 ease-in-out duration-200 cursor-pointer";

  return (
    <div className="w-full flex items-center justify-between">
      <span className="min-w-5 h-5">
        <ProductLogoWithName />
      </span>
      <div className="lg:flex md:flex items-center gap-6 font-semibold font-brand text-sm hidden text-slate-50/80 py-1">
        <a href="#challanges" className={`${navOptionsClass}`}>
          Challanges
        </a>
        <a href="#features" className={`${navOptionsClass}`}>
          Features
        </a>
        <Link href={"/development-insights"}>
          <span className={`${navOptionsClass}`}>Development Insight</span>
        </Link>
        <ConfirmRedirect />
      </div>
      <div className="w-fit h-full lg:block block md:hidden">
        <a
          href="https://www.producthunt.com/posts/cvcompass?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cvcompass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=866108&theme=light&t=1739281974745"
            alt="CVCompass - Product Hunt"
            width={150}
            height={54}
            unoptimized
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderComp;
