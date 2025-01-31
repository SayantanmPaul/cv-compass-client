"use client";

import HeaderComp from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import ImpactSection from "@/components/landing/impact";
// import UserVisitsTSX from "@/components/landing/user-visits";
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
      <div className="w-full flex justify-center">
        <ImpactSection />
      </div>
      {/* <UserVisitsTSX /> */}
    </motion.div>
  );
}
