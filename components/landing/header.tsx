import { ProductLogoWithName } from "@/components/app-ui/productLogoWithName";
import ConfirmRedirect from "../app-ui/confirm-redirect-dialog";
import Image from "next/image";

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
        <span className={`${navOptionsClass}`}>Development Insight</span>
        <ConfirmRedirect />
      </div>
      <div className="w-fit h-full lg:block block md:hidden">
        <Image
          src="/test-images/producthunt.svg"
          alt="protducthunt"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default HeaderComp;
