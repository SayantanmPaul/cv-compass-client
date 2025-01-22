import React from "react";
import { FileUpload } from "../ui/file-upload";
import { Textarea } from "../ui/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { FormInput } from "@/lib/types";
import { useGenerateFeadback } from "@/lib/react-query/queries";

const ResumeParserForm: React.FC = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      jobDescription: "",
      resume: null,
    },
  });

  const { mutate: GenerateFeadbackFn, isPending } = useGenerateFeadback();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      GenerateFeadbackFn(
        {
          resume: data.resume,
          jobDescription: data.jobDescription,
        },
        {
          onSuccess: (data) => {
            console.log(data);
          },
        }
      );
    } catch (error) {
      console.log(error);
      setError("root", {});
    }
  };

  const handleErrors = () => {
    if (errors.resume) {
      toast({
        title: errors.resume.message,
        variant: "destructive",
        style: {
          marginTop: "1rem",
          padding: "10px 16px",
          // backgroundColor: "#D7700B",
          fontSize: "24px",
          fontFamily: "alegreya",
        },
      });
    }
    if (errors.jobDescription) {
      toast({
        title: errors.jobDescription.message,
        variant: "destructive",
        style: {
          marginTop: "1rem",
          padding: "10px 16px",
          // backgroundColor: "#D7700B",
          fontSize: "24px",
          fontFamily: "alegreya",
        },
      });
    }
    if (errors.root) {
      toast({
        title: errors.root.message,
        variant: "destructive",
        style: {
          marginTop: "1rem",
          padding: "10px 16px",
          // backgroundColor: "#D7700B",
          fontSize: "24px",
          fontFamily: "alegreya",
        },
      });
    }
  };

  return (
    <div className="w-full h-fit flex flex-col items-center lg:gap-5 gap-3 overflow-hidden">
      <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold font-alegreya lg:text-center md:text-center lg:max-w-2xl max-w-lg">
        Please Fill the Form to get Your Resume Scored and Genertate Feedback
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, handleErrors)}
        className="w-full flex flex-col items-center gap-3"
      >
        <Controller
          control={control}
          name="resume"
          rules={{ required: "Please provide your resume" }}
          render={({ field }) => (
            <FileUpload
              value={field.value}
              error={errors.resume?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Textarea
          placeholder="Eg. paste the job description from the job posting or enter a brief summary"
          rows={15}
          style={{ fontSize: "18px" }}
          {...register("jobDescription", {
            required: "Please provide the job description from the job posting",
          })}
          className={`border border-white/5 text-white font-alegreya rounded-none focus:border-white/20 placeholder:text-slate-100/30 ${
            errors && errors.jobDescription ? "border-[#D7700B]" : ""
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`tabs py-2 lg:px-8 md:px-8 font-secondary font-semibold text-sm bg-[#D7700B] border border-[#D7700B] hover:border-white/40 relative text-white group w-full text-center `}
        >
          {isPending ? "Loading..." : "Generate Feedback"}
        </button>
      </form>
    </div>
  );
};

export default ResumeParserForm;
