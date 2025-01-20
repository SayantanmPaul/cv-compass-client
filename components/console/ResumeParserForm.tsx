import React from "react";
import { FileUpload } from "../ui/file-upload";
import { Textarea } from "../ui/textarea";

const ResumeParserForm = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center lg:gap-5 gap-3 overflow-hidden">
      <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold font-alegreya lg:text-center md:text-center lg:max-w-2xl max-w-lg">
        Please Fill the Form to get Your Resume Scored and Genertate Feedback
      </h1>
      <div className="w-full border border-white/10 border-dashed hover:border-white/20 ease-in-out">
        <FileUpload />
      </div>
      <Textarea
        placeholder="Eg. paste the job description from the job posting or enter a brief summary"
        rows={15}
        style={{ fontSize: "18px" }}
        className=" border border-white/5 text-white font-alegreya rounded-none focus:border-white/20 placeholder:text-slate-100/30"
      />
      <button
        className={
          "tabs py-2 lg:px-8 md:px-8 font-secondary font-semibold text-sm bg-[#D7700B] border border-[#D7700B] hover:border-white/40 relative text-white group w-full text-center "
        }
      >
        Generate Feedback
      </button>
    </div>
  );
};

export default ResumeParserForm;
