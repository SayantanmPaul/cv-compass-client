"use client";

import CandidateEvaluationSection from "@/components/console/candidate-evaulation";
import ConsoleNavbar from "@/components/console/console-nav";
import ResumeParserForm from "@/components/console/ResumeParserForm";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useAppStore } from "@/context/AppStore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ConsolePage = () => {
  const { listResults, isLoading } = useAppStore();
  return (
    <motion.div
      className="w-full min-h-screen lg:px-16 px-4 py-7 bg-no-repeat lg:bg-contain bg-cover max-w-screen-2xl flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <ConsoleNavbar />
      <div className="w-full flex flex-col justify-start items-center">
        <div className="max-w-screen-lg w-full">
          <ResumeParserForm />
        </div>
        <div
          className={`h-16 flex items-center justify-center w-full opacity-0 ${
            isLoading && "opacity-100"
          } duration-300 ease-in-out `}
        >
          <LoadingStateTextShimmer />
        </div>
        {listResults && listResults.length > 0 && (
          <div className="max-w-screen-lg w-full">
            <CandidateEvaluationSection />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ConsolePage;

// loading state
const LoadingStateTextShimmer = () => {
  const { isLoading } = useAppStore();

  const texts = [
    "ai can make mistakes sometimes we should trust our own judgement...",
    "generating the candidate's score...",
    "results may take a while to generate...",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <TextShimmer className="font-mono text-sm" duration={1}>
      {texts[index]}
    </TextShimmer>
  );
};
