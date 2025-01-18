import Link from "next/link";
import ProductLogo from "./product-logo";

export const ProductLogoWithName = ({
  textStyles,
}: {
  textStyles?: string;
}) => {
  const defaultStyles = "font-semibold text-white text-base";
  return (
    <Link href="/">
      <div className="flex flex-row items-start gap-2 w-full cursor-pointer">
        <span className="h-5 w-5 select-none">
          <ProductLogo />
        </span>
        <p className={`${textStyles || defaultStyles} font-brand select-none`}>
          CVCompass
        </p>
      </div>
    </Link>
  );
};
