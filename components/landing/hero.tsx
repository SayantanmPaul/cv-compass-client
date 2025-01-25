"use client";

import LlamaPoweredButton from "@/components/app-ui/lama-powered-button";
import ProductLogoGeometry from "@/components/app-ui/product-logo-geometry";
import dynamic from "next/dynamic";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import DemoYoutubeModal from "../app-ui/demo-youtube-modal";
import Link from "next/link";

const UnderLineLottie = dynamic(() => import("../app-ui/underline-lottie"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <motion.div className="w-full flex items-center min-h-[45em] justify-between relative overflow-hidden">
      <div className="flex flex-col gap-4 items-start justify-center ,min-h-[5em] w-full">
        {/* model name and tagline  */}
        <motion.div
          className="flex flex-col items-start relative min-h-48 w-full"
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
          <span className="absolute lg:left-[320px] md:left-[320px] left-0 lg:bottom-2 md:bottom-2 -bottom-2 z-0">
            <UnderLineLottie />
          </span>
        </motion.div>

        {/* buttons div animation */}
        <div className="flex items-start gap-3 w-full absolute bottom-4 lg:relative md:relative">
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
            {/* <QuickDemoTriggerButton /> */}
            <DemoYoutubeModal />
          </motion.div>
        </div>
      </div>

      {/* spline animation */}
      <motion.div
        className="lg:relative absolute top-0 left-0 lg:left-24 min-w-96 w-full h-full lg:max-w-[44em] overflow-hidden"
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
