import { useAppStore } from "@/context/AppStore";
import feedback from "../../testresult.json";
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

const CandidateEvaluationSection = () => {
  const { userType } = useAppStore();

  const basePadding = "lg:px-2 md:px-2 px-1";

  const RecruterViewJSX = () => {
    return (
      <div className="w-full flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <ATSBreakDownRaderChart />
          <div className={` py-3 ${basePadding}`}>
            <CandidateSummary />
          </div>
          <div className={`pb-3 ${basePadding}`}>
            <MissingKeywordsBadgesSection
              badges={feedback.feedback.missingKeywords}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full relative">
            <AtsProgrssCard progress={67} />
          </div>
          <div className={`w-full pb-3 lg:p-3 ${basePadding}`}>
            <RelevantKeywordsBadgesSection
              badges={feedback.feedback.relavantKeywords}
            />
          </div>
          <AtsBreakdownBarChart />
        </div>
      </div>
    );
  };

  const CandidateViewJSX = () => {
    return (
      <>
        <div className="w-full flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className={`${basePadding}`}>
              <CandidateSummary />
            </div>
            <div className={` ${basePadding}`}>
              <MissingKeywordsBadgesSection
                badges={feedback.feedback.missingKeywords}
              />
            </div>
            <div className={` py-3 ${basePadding}`}>
              <RelevantKeywordsBadgesSection
                badges={feedback.feedback.relavantKeywords}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full relative">
              <AtsProgrssCard progress={67} />
            </div>
            <AtsBreakdownBarChart />
          </div>
        </div>
        <div className="lg:p-3 p-1">
          <CandidateEvaludationFeedback
            feedbacks={feedback.feedback.feedback}
          />
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col lg:gap-10 gap-6">
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

const CandidateSummary = () => {
  if (!feedback.feedback.summary) {
    return <CandidateSummarySkeleton />;
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-3xl font-alegreya font-semibold ">Summary</h1>
      <p className="text-lg text-accent font-medium font-alegreya text-pretty ">
        {feedback.feedback.summary}
      </p>
    </div>
  );
};

const RelevantKeywordsBadgesSection = ({ badges }: { badges: string[] }) => {
  if (!badges) {
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

const MissingKeywordsBadgesSection = ({ badges }: { badges: string[] }) => {
  if (!badges) {
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

const CandidateEvaludationFeedback = ({
  feedbacks,
}: {
  feedbacks: string[];
}) => {
  if (!feedback) {
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
