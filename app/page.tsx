"use client";

import FeatureList from "@/components/landing/featurelist";
import HeaderComp from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import ImpactSection from "@/components/landing/impact";
import LiveVisitorCount from "@/components/landing/user-visits";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-full h-screen lg:px-16 px-4 py-7 bg-no-repeat lg:bg-contain bg-cover max-w-screen-2xl lg:gap-20 md:gap-6 gap-0 flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: "url(/bg-assets/gradient-effect.svg)" }}
    >
      {/* Navbar */}

      <HeaderComp />
      {/* Hero Section */}
      <HeroSection />
      <div className="flex flex-col items-center lg:gap-20 gap-16 w-full">
        <div className="w-full flex justify-center">
          <ImpactSection />
        </div>
        <LineBreak />
        <FeatureList />
        <LineBreak />
        <LiveVisitorCount />
      </div>
    </motion.div>
  );
}

const LineBreak = () => {
  return (
    <svg
      width="260"
      height="20"
      viewBox="0 0 303 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.5 16.3036C150.434 13.4589 148.173 11.198 145.328 10.132C148.173 9.06597 150.434 6.80509 151.5 3.96037C152.566 6.80508 154.826 9.06596 157.671 10.132C154.826 11.198 152.566 13.4589 151.5 16.3036Z"
        fill="#D6BE99"
        stroke="#D6BE99"
        strokeWidth="1.33333"
      />
      <path
        d="M135.424 12.4133C134.904 11.4476 134.109 10.6522 133.143 10.132C134.109 9.61187 134.904 8.81656 135.424 7.85105C135.944 8.81656 136.74 9.61187 137.705 10.132C136.74 10.6522 135.944 11.4476 135.424 12.4133Z"
        fill="#D6BE99"
        stroke="#D6BE99"
        strokeWidth="1.33333"
      />
      <path
        d="M167.575 12.4134C167.055 11.4477 166.26 10.6522 165.294 10.132C166.26 9.61185 167.055 8.81647 167.575 7.8509C168.096 8.81649 168.891 9.61185 169.857 10.132C168.891 10.6522 168.096 11.4477 167.575 12.4134Z"
        fill="#D6BE99"
        stroke="#D6BE99"
        strokeWidth="1.33333"
      />
      <path d="M3.39844 10.132H125.386Z" fill="#D6BE99" />
      <path
        d="M3.39844 10.132H125.386"
        stroke="#D6BE99"
        strokeWidth="2.05067"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.13112 10.132C6.13112 11.6412 4.9075 12.8642 3.39889 12.8642C1.88958 12.8642 0.666667 11.6413 0.666667 10.132C0.666667 8.6234 1.88968 7.39979 3.39889 7.39979C4.9074 7.39979 6.13112 8.62351 6.13112 10.132Z"
        fill="#D6BE99"
        stroke="#D6BE99"
        strokeWidth="1.33333"
      />
      <path d="M299.601 10.132H177.614Z" fill="#D6BE99" />
      <path
        d="M299.601 10.132H177.614"
        stroke="#D6BE99"
        strokeWidth="2.05067"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M299.601 12.8642C298.091 12.8642 296.868 11.6411 296.868 10.132C296.868 8.62361 298.091 7.39979 299.601 7.39979C301.109 7.39979 302.333 8.62351 302.333 10.132C302.333 11.6412 301.109 12.8642 299.601 12.8642Z"
        fill="#D6BE99"
        stroke="#D6BE99"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
