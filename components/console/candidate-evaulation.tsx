import { useAppStore } from "@/context/AppStore";
import AtsBreakdownBarChart from "../charts/AtsBreakdownBarChart";
import ATSBreakDownRaderChart from "../charts/AtsBreakdownRaderChart";
import AtsProgrssCard from "../charts/AtsProgrssCard";
import {
  CandidateFeedbacksSkeleton,
  CandidateSummarySkeleton,
  KeywordsBadgeSkeleton,
} from "../skeletons/Skeletons";
import { Badge } from "../ui/badge";
import FilterCheckBoxInput from "./filter-checkbox";
import LastResultsTable from "../table/LastResultsTable";

const CandidateEvaluationSection = () => {
  const { userType, lastGeneratedFeedback, isLoading } = useAppStore();

  const basePadding = "lg:px-2 md:px-2 px-1";

  // recruiter view layout
  const RecruterViewJSX = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-4">
          <div className="w-full flex flex-col gap-4">
            <ATSBreakDownRaderChart
              atsBreakDownData={lastGeneratedFeedback?.atsBreakDown}
              atsScore={lastGeneratedFeedback?.atsScore}
              isLoading={isLoading}
            />
            <div className={` py-3 ${basePadding}`}>
              <CandidateSummary
                summary={lastGeneratedFeedback?.summary}
                isLoading={isLoading}
              />
            </div>
            <div className={`pb-3 ${basePadding}`}>
              <MissingKeywordsBadgesSection
                badges={lastGeneratedFeedback?.missingKeywords}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full relative">
              <AtsProgrssCard
                progress={lastGeneratedFeedback?.atsScore}
                isLoading={isLoading}
              />
            </div>
            <div className={`w-full pb-3 lg:p-3 ${basePadding}`}>
              <RelevantKeywordsBadgesSection
                badges={lastGeneratedFeedback?.relavantKeywords}
                isLoading={isLoading}
              />
            </div>
            <AtsBreakdownBarChart
              atsBreakDownData={lastGeneratedFeedback?.atsBreakDown}
              atsScore={lastGeneratedFeedback?.atsScore}
              isLoading={isLoading}
            />
          </div>
        </div>
        <LastResultsTable />
      </div>
    );
  };

  // candidate view layout
  const CandidateViewJSX = () => {
    return (
      <>
        <div className="w-full flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className={`${basePadding}`}>
              <CandidateSummary
                summary={lastGeneratedFeedback?.summary}
                isLoading={isLoading}
              />
            </div>
            <div className={` ${basePadding}`}>
              <MissingKeywordsBadgesSection
                badges={lastGeneratedFeedback?.missingKeywords}
                isLoading={isLoading}
              />
            </div>
            <div className={` py-3 ${basePadding}`}>
              <RelevantKeywordsBadgesSection
                badges={lastGeneratedFeedback?.relavantKeywords}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full relative">
              <AtsProgrssCard
                progress={lastGeneratedFeedback?.atsScore}
                isLoading={isLoading}
              />
            </div>
            <AtsBreakdownBarChart
              atsBreakDownData={lastGeneratedFeedback?.atsBreakDown}
              atsScore={lastGeneratedFeedback?.atsScore}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="lg:p-3 p-1">
          <CandidateEvaludationFeedback
            feedbacks={lastGeneratedFeedback?.feedback}
            isLoading={isLoading}
          />
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col  gap-6 py-6" id="generated-feedback">
      <div className="w-full flex items-end justify-end">
        <FilterCheckBoxInput />
      </div>
      <div className=" w-full flex flex-col justify-between">
        {userType.recruiter ? <RecruterViewJSX /> : <CandidateViewJSX />}
      </div>
    </div>
  );
};

export default CandidateEvaluationSection;

// candidate summary
const CandidateSummary = ({
  summary,
  isLoading,
}: {
  summary?: string;
  isLoading?: boolean;
}) => {
  if (isLoading || !summary) {
    return <CandidateSummarySkeleton />;
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-3xl font-alegreya font-semibold ">Summary</h1>
      <p className="text-lg text-accent font-medium font-alegreya text-pretty ">
        {summary}
      </p>
    </div>
  );
};

// relavent keywords
const RelevantKeywordsBadgesSection = ({
  badges,
  isLoading,
}: {
  badges?: string[];
  isLoading?: boolean;
}) => {
  if (isLoading || !badges) {
    return <KeywordsBadgeSkeleton />;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-3xl font-alegreya font-semibold leading-0">
        {" "}
        Relevant Keyword Matches
      </h1>
      <div className="w-full inline-flex gap-2 flex-wrap">
        {badges.map((badge, index) => (
          <Badge
            variant="outline"
            key={index}
            className="inline-flex items-center rounded-md px-3 py-1 text-xs font-secondary font-medium text-white bg-[#D7700B]/20 backdrop-blur-sm ring-1 ring-[#D7700B]/40 ring-inset cursor-default ease-in-out duration-100"
          >
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

// missing keywords
const MissingKeywordsBadgesSection = ({
  badges,
  isLoading,
}: {
  badges?: string[];
  isLoading?: boolean;
}) => {
  if (isLoading || !badges) {
    return <KeywordsBadgeSkeleton />;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-3xl font-alegreya font-semibold">
        {" "}
        Missing Keywords
      </h1>
      <div className="w-full inline-flex gap-2 flex-wrap">
        {badges.map((badge, index) => (
          <Badge
            variant="outline"
            key={index}
            className="inline-flex items-center rounded-md px-3 py-1 text-xs font-secondary font-medium text-white bg-[#7d2d12] backdrop-blur-sm ring-1 ring-[#D7700B]/60 ring-inset cursor-default ease-in-out duration-100"
          >
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

// feedback for the candidate 
const CandidateEvaludationFeedback = ({
  feedbacks,
  isLoading,
}: {
  feedbacks?: string[];
  isLoading?: boolean;
}) => {
  if (isLoading || !feedbacks) {
    return <CandidateFeedbacksSkeleton />;
  }
  return (
    <div className="w-full flex flex-col gap-4 max-w-screen-xl items-end">
      <h1 className="text-3xl text-start w-full font-alegreya font-semibold ">
        {" "}
        Feedbacks for the Candidate
      </h1>
      <ul className="list-image-none space-y-4">
        {feedbacks.map((feedback, i) => (
          <li
            key={i}
            className="text-lg  font-medium font-alegreya border-l-4 border-[#D7700B] pl-3 py-0 text-[#ECDFCC]"
          >
            {feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};
