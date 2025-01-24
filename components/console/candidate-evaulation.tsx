import React from "react";
import FilterCheckBoxInput from "./filter-checkbox";
import ATSBreakDownRaderChart from "../charts/AtsBreakdownRaderChart";
import AtsBreakdownBarChart from "../charts/AtsBreakdownBarChart";
import feedback from "../../testresult.json";
import AtsProgrssCard from "../charts/AtsProgrssCard";

const CandidateEvaluationSection = () => {
  return (
    <div className="w-full flex flex-col lg:gap-10 gap-6">
      <div className="w-full flex items-end justify-end">
        <FilterCheckBoxInput />
      </div>
      <div className=" w-full flex flex-col gap-4 justify-between">
        <div className="w-full flex lg:flex-row md:flex-row flex-col justify-between gap-4">
          <div className="w-full">
            <ATSBreakDownRaderChart />
          </div>
          <div className="w-full flex  flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full relative">
                <AtsProgrssCard progress={67} />
              </div>
              <div className="w-full max-w-[500px] lg:p-4 md:p-4 p-1 py-2 ">
                <CandiddateSummary />
              </div>
            </div>
            <AtsBreakdownBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateEvaluationSection;

const CandiddateSummary = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-3xl font-alegreya font-semibold ">
        Summary of the Candidate
      </h1>
      <p className="text-lg text-muted-foreground font-medium font-alegreya">{`Results-driven software engineer with internship-level experience and a strong foundation in full-stack development, proficient in multiple programming languages, and skilled in effective collaboration and meeting project goals.`}</p>
    </div>
  );
};
