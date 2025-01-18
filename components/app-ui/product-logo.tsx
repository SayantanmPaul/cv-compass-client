import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import BrandIcon from "@/public/cv-compass-logo.svg";

const ProductLogo = () => {
  return (
    <AspectRatio ratio={1 / 1}>
      <Image
        src={BrandIcon}
        alt="hackmates"
        fill
        className="h-full w-full object-cover"
        priority
        draggable={false}
      />
    </AspectRatio>
  );
};

export default ProductLogo;
