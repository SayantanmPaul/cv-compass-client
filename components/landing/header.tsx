import { ProductLogoWithName } from "@/components/app-ui/productLogoWithName";
import ConfirmRedirect from "../app-ui/confirm-redirect-dialog";

const HeaderComp = () => {
  const navOptionsClass =
    "hover:underline hover:font-bold hover:text-slate-50 underline-offset-2 ease-in-out duration-200 cursor-pointer";

  return (
    <div className="w-full flex items-center justify-between">
      <span className="min-w-5 h-5">
        <ProductLogoWithName />
      </span>
      <div className="lg:flex md:flex items-center gap-6 font-semibold font-secondary text-sm hidden text-slate-50/80 py-1">
        <span className={`${navOptionsClass}`}>Challanges</span>
        <span className={`${navOptionsClass}`}>Features</span>
        <span className={`${navOptionsClass}`}>Support</span>
        <ConfirmRedirect />
      </div>
    </div>
  );
};

export default HeaderComp;
