"use client";

import CandidateEvaluationSection from "@/components/console/candidate-evaulation";
import ConsoleNavbar from "@/components/console/console-nav";
import ResumeParserForm from "@/components/console/ResumeParserForm";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useAppStore } from "@/context/AppStore";
import { motion } from "framer-motion";

const ConsolePage = () => {
  const { listResults, isLoading } = useAppStore();
  return (
    <motion.div
      className="w-full min-h-screen lg:px-16 px-4 py-7 bg-no-repeat lg:bg-contain bg-cover max-w-screen-2xl flex flex-col gap-8"
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
          className={`h-20 flex items-center justify-center w-full opacity-0 ${
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

const LoadingStateTextShimmer = () => {
  const { isLoading } = useAppStore();
  return (
    <TextShimmer className={`font-mono text-sm `} duration={isLoading ? 1 : 0}>
      generating the candidate's score...
    </TextShimmer>
  );
};
