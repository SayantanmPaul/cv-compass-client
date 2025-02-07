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

const HeroSection = () => {
  return (
    <motion.div className="w-full flex items-center justify-between h-full lg:min-h-[40em] md:min-h-[35em] min-h-[98%] relative">
      <div className="flex flex-col lg:gap-5 gap-12 items-start lg:justify-center md:justify-center w-full h-full max-h-[28em] lg:max-h-full md:max-h-full">
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
            words="Accelerate talent match, find right talents, amplify Quality"
            className="font-alegreya italic lg:text-[54px] text-5xl font-semibold z-10 lg:max-w-3xl md:max-w-2xl w-full"
            duration={0.6}
          />
          <span className="absolute lg:left-[330px] md:left-[284px] left-0 -bottom-2 z-0">
            <UnderLineLottie />
          </span>
        </motion.div>

        {/* buttons div animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="flex lg:gap-10 md:gap-10 gap-3 lg:flex-row md:flex-row flex-col items-center w-full"
        >
          <GoToConsoleButton />
          <DemoYoutubeModal />
        </motion.div>
      </div>

      {/* spline animation */}
      <motion.div
        className="absolute top-6 right-0 lg:w-fit lg:h-fit w-[900px] h-[900px] overflow-hidden lg:overflow-visible -z-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <ProductLogoGeometry />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

export const GoToConsoleButton = () => {
  return (
    <Link href={"/console"} className="relative w-full md:w-auto lg:w-auto ">
      <span
        className={
          "tabs py-2 px-4 lg:px-8 md:px-8 font-secondary font-bold text-sm bg-primary border border-white text-white peer text-center overflow-hidden z-10 relative block w-full cursor-pointer"
        }
      >
        Try for free
      </span>
      <div className="w-[165px] h-9 border border-white absolute -bottom-1 peer-hover:bg-white left-[6px] duration-200 ease-in-out lg:block md:block hidden "></div>
    </Link>
  );
};
