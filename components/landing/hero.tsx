import LlamaPoweredButton from "@/components/app-ui/lama-powered-button";
import ProductLogoGeometry from "@/components/app-ui/product-logo-geometry";
import dynamic from "next/dynamic";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import DemoYoutubeModal from "../app-ui/demo-youtube-modal";
import Link from "next/link";

const UnderLineLottie = dynamic(
  () => import("../lottie-files/UnderlineLottie"),
  {
    ssr: false,
  }
);

// lg:min-h-[5em] md:min-h-[5em] min-h-[4em]
// lg:min-h-[46em] md:min-h-[35em] min-h-screen

const HeroSection = () => {
  return (
    <motion.div className="w-fit flex items-center justify-between h-full lg:min-h-[40em] md:min-h-[35em] min-h-screen overflow-hidden">
      <div className="flex flex-col gap-4 items-start lg:justify-center md:justify-center w-full h-full max-h-[28em] lg:max-h-full md:max-h-full lg overflow-hidden">
        {/* model name and tagline  */}
        <motion.div
          className="flex flex-col items-start relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <LlamaPoweredButton />
          </motion.div>
          <TextGenerateEffect
            words="Accelerate talent match, find right talents, amplify Quality."
            className="font-alegreya text-5xl font-medium z-10"
            duration={0.6}
          />
          <span className="absolute lg:left-[320px] md:left-[320px] left-0 -bottom-2 z-0">
            <UnderLineLottie />
          </span>
        </motion.div>

        {/* buttons div animation */}
        <div className="flex items-start gap-3 w-full absolute bottom-8 left-1/2 -translate-x-1/2 lg:bottom-4 md:bottom-4 lg:relative md:relative pt-6 max-w-full px-4 lg:px-0 md:px-0 lg:max-w-full md:max-w-full">
          <motion.div
            className="flex lg:gap-10 md:gap-10 gap-4 flex-col lg:flex-row md:flex-row items-center w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <GoToConsoleButton />
            <DemoYoutubeModal />
          </motion.div>
        </div>
      </div>

      {/* spline animation */}
      <motion.div
        className="lg:relative absolute top-0 left-0 lg:left-24 w-full h-full lg:max-w-[44em] overflow-hidden max-w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProductLogoGeometry />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

export const GoToConsoleButton = () => {
  return (
    <Link href={"/console"} className="relative w-full md:w-auto lg:w-auto">
      <span
        className={
          "tabs py-2 px-4 lg:px-8 md:px-8 font-secondary font-bold text-sm bg-primary border border-white text-white peer text-center overflow-hidden z-10 relative block w-full"
        }
      >
        Try for free
      </span>
      <div className="w-[165px] h-9 border border-white absolute -bottom-1 peer-hover:bg-white left-[6px] duration-200 ease-in-out lg:block md:block hidden"></div>
    </Link>
  );
};
