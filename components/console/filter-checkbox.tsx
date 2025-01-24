import React, { useState } from "react";
import Checkbox from "../ui/checkbox";

const FilterCheckBoxInput = () => {
  const [isRecruiterChecked, setIsRecruiterChecked] = useState(true);
  const [isCandidateChecked, setIsCandidateChecked] = useState(false);

  return (
    <div className="w-fit flex gap-3 items-center font-secondary font-semibold lg:text-sm md:text-sm text-xs  text-white">
      <p>You are an: </p>
      <Checkbox
        label="Recruiter/HR"
        checked={isRecruiterChecked}
        onChange={() => setIsRecruiterChecked(!isRecruiterChecked)}
      />
      <Checkbox
        label="Candidate"
        checked={isCandidateChecked}
        onChange={() => setIsCandidateChecked(!isCandidateChecked)}
      />
    </div>
  );
};

export default FilterCheckBoxInput;
