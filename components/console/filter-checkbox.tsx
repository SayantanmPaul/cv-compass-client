import { useAppStore } from "@/context/AppStore";
import Checkbox from "../ui/checkbox";

const FilterCheckBoxInput = () => {
  const { userType, setUserType } = useAppStore();

  return (
    <div className="w-fit flex gap-3 items-center font-secondary font-semibold lg:text-sm md:text-sm text-xs  text-white">
      <p>You are an: </p>
      <Checkbox
        label="Recruiter/HR"
        checked={userType.recruiter}
        onChange={() => setUserType("recruiter")}
      />
      <Checkbox
        label="Candidate"
        checked={userType.candidate}
        onChange={() => setUserType("candidate")}
      />
    </div>
  );
};

export default FilterCheckBoxInput;
