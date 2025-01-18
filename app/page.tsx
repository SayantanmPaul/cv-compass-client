"use client";

import HeaderComp from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-full h-screen lg:px-16 px-4 py-7 bg-no-repeat lg:bg-contain bg-cover max-w-screen-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: "url(/bg-assets/gradient-effect.svg)" }}
    >
      {/* Navbar */}
      <HeaderComp />
      {/* Hero Section */}
      <HeroSection />
    </motion.div>
  );
}
