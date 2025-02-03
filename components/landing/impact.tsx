"use client";

import { useTheme } from "next-themes";
// import { useEffect } from "react";
import { ArchitectureBeamAnimation } from "../app-ui/ArchitectureAnimation";
import { LineShadowText } from "../ui/line-shadow-text";
import { SVGProps, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ArrowLottie = dynamic(() => import("../lottie-files/ArrowLottie"), {
  ssr: false,
});

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-10 lg:items-start md:items-center items-start justify-center w-full max-w-screen-2xl lg:px-3 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-2 lg:items-start md:items-center items-start justify-center"
      >
        <HeaderText />
        <p className="font-brand font-semibold lg:text-base text-sm text-accent ">
          ...well maybe not much. But we can always take the first step, right?
        </p>
      </motion.div>
      <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-0 ">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="w-full h-fit flex flex-col justify-start lg:max-w-2xl md:max-w-xl max-w-sm "
        >
          <ImpactDiv />
        </motion.div>
        {isInView && (
          <span className="lg:rotate-[-180deg] rotate-[55deg] lg:scale-x-[-1] w-28 overflow-hidden block ">
            <ArrowLottie />
          </span>
        )}

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <ArchitectureBeamDiv />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ImpactSection;

// project goal+ how it works
const ImpactDiv = () => {
  return (
    <div className="border border-accent/30 dark:border-orange-400/30 flex flex-col items-start max-w-full lg:py-6 lg:px-8 px-4 py-4 relative h-fit">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-accent" />

      <h1 className="lg:text-4xl text-2xl font-alegreya font-medium italic text-start">
        Bridge the ATS &quot;Black Box&quot; Gap
      </h1>
      <p className="text-lg font-alegreya relative z-20 mt-2 text-accent">
        The goal was simple, making the candidates aligned with their rightful
        opportunity. Too often, many stage 1 startups struggle to find the
        talent they need as well as great candidates are missed simply because
        their resumes don&apos;t align with ATS requirements.
      </p>
      <div className="text-neutral-200 mt-4 relative z-20 ">
        <p className="font-alegreya text-xl font-semibold text-orange-400">
          How you procead with CV Compass?
        </p>
        <ul className="flex flex-col gap-1 mt-2">
          <Step title="Upload your resume(.pdf) and it's against job description." />
          <Step title="Create a strong password" />
          <Step title="Set up two-factor authentication" />
          <Step title="CVCompass provides a personalized report, highlighting strengths and weaknesses in your resume." />
        </ul>
      </div>
    </div>
  );
};

// list steps
const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className=" font-primary font-medium">{title}</p>
    </li>
  );
};

// flow chart visual representation
const ArchitectureBeamDiv = () => {
  return (
    <div className="border border-accent/30 dark:border-orange-400/30 items-end max-w-full md:min-w-xl w-full lg:py-6 lg:px-6 px-4 py-4 relative min-h-[396px] flex flex-col ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-accent" />

      <div className="w-full max-w-full flex flex-col justify-center items-start gap-4 ">
        <LineShadowText className="italic font-alegreya text-3xl w-fit text-nowrap top-0">
          integration flow
        </LineShadowText>
        <ArchitectureBeamAnimation />
      </div>
    </div>
  );
};

// top header text: Are we even making any Impact?
const HeaderText = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <h1 className="text-balance font-semibold leading-none tracking-tighter text-3xl md:text-3xl lg:text-[42px] font-brand">
      Are we even making any
      <LineShadowText
        className="italic ml-3  font-alegreya font-semibold lg:text-6xl md:text-5xl text-5xl"
        shadowColor={shadowColor}
      >
        Impact?
      </LineShadowText>
    </h1>
  );
};

// check icon svg for list
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-accent mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
