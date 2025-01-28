import { useAppStore } from "@/context/AppStore";
import { toast } from "@/hooks/use-toast";
import { useGenerateFeadback } from "@/lib/react-query/queries";
import { FormInput } from "@/lib/types";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FileUpload } from "../ui/file-upload";
import { Textarea } from "../ui/textarea";

const toastStyles = {
  marginTop: "1rem",
  padding: "10px 16px",
  fontSize: "24px",
  fontFamily: "alegreya",
};
const ResumeParserForm: React.FC = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
    setError,
    reset,
  } = useForm({
    defaultValues: {
      jobDescription: "",
      resume: null as File | null,
    },
  });

  const { mutate: GenerateFeadbackFn, isPending } = useGenerateFeadback();
  const {
    addLastGeneratedFeedback,
    lastGeneratedFeedback,
    setListResults,
    listResults,
    isLoading,
    setIsLoading,
  } = useAppStore();

  const [resumeURL, setResumeURL] = useState<string | null>("");
  const [resumeFileName, setResumeFileName] = useState<string | null>("");

  // Populate form with values from Zustand if available
  useEffect(() => {
    if (lastGeneratedFeedback?.jobDescription) {
      reset({
        jobDescription: lastGeneratedFeedback?.jobDescription || "",
      });
    }
  }, [lastGeneratedFeedback, reset]);

  // backend error handling
  const handleAPIError = (error: AxiosError | Error) => {
    let message = "Something went wrong. Please try again later.";

    if (error instanceof AxiosError) {
      if (error.response?.status === 429) {
        message = error.response?.data?.error || "API rate limit reached.";
      } else if (error.response) {
        message =
          error.response?.data?.error?.message ||
          `Request failed with status ${error.response.status}`;
      } else if (error.request) {
        message = "No response received from the server.";
      }
    } else {
      message = error.message || message;
    }

    setError("root", { message });
    toast({
      title: message,
      variant: "destructive",
      style: toastStyles,
    });
  };

  // creating a temporary url for session only
  const handleFileChange = (file: File | null) => {
    if (file) {
      setResumeFileName(file.name);
      const url = URL.createObjectURL(file);
      setResumeURL(url);
    }
  };

  // submit handler fn
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      setIsLoading(true);
      GenerateFeadbackFn(
        {
          resume: data.resume,
          jobDescription: data.jobDescription,
        },
        {
          onSuccess: (result) => {
            addLastGeneratedFeedback({
              atsScore: result.data.atsScore,
              atsBreakDown: {
                keywordMatching: result.data.atsBreakDown.keywordMatching,
                yearsOfExperience: result.data.atsBreakDown.yearsOfExperience,
                projectRelevance: result.data.atsBreakDown.projectRelevance,
                quantifiableAchievements:
                  result.data.atsBreakDown.quantifiableAchievements,
              },
              summary: result.data.summary,
              feedback: result.data.feedback,
              missingKeywords: result.data.missingKeywords,
              relavantKeywords: result.data.relavantKeywords,
              //form input store in zustand
              jobDescription: data.jobDescription,
              resumeUrl: resumeURL,
              resumeFileName: resumeFileName,
            });
            setListResults(
              [
                {
                  atsScore: result.data.atsScore,
                  atsBreakDown: {
                    keywordMatching: result.data.atsBreakDown.keywordMatching,
                    yearsOfExperience:
                      result.data.atsBreakDown.yearsOfExperience,
                    projectRelevance: result.data.atsBreakDown.projectRelevance,
                    quantifiableAchievements:
                      result.data.atsBreakDown.quantifiableAchievements,
                  },
                  summary: result.data.summary,
                  feedback: result.data.feedback,
                  missingKeywords: result.data.missingKeywords,
                  relavantKeywords: result.data.relavantKeywords,
                  //form input store in zustand
                  jobDescription: data.jobDescription,
                  resumeUrl: resumeURL,
                  resumeFileName: resumeFileName,
                },
                ...listResults,
              ].slice(0, 3)
            );
            // go to result section if success
            const reultsDiv = document.getElementById("generated-feedback");
            reultsDiv?.scrollIntoView();
          },
          onError: (error) => {
            handleAPIError(error);
          },
          onSettled: () => {
            setIsLoading(false);
          },
        }
      );
    } catch (error) {
      console.log(error);
      setError("root", {});
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col items-center lg:gap-5 gap-3 overflow-hidden">
      <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold font-alegreya lg:text-center md:text-center lg:max-w-2xl max-w-lg">
        Please Fill the Form to get Your Resume Scored and Genertate Feedback
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
              onChange={(file) => {
                field.onChange(file);
                handleFileChange(file);
              }}
            />
          )}
        />
        <div className="w-full flex flex-col gap-1">
          <Textarea
            placeholder="Eg. paste the job description from the job posting or enter a brief summary"
            rows={15}
            style={{ fontSize: "18px" }}
            {...register("jobDescription", {
              required:
                "Please provide the job description from the job posting",
              minLength: {
                value: 100,
                message: "Job description is too short",
              },
            })}
            className={`border border-white/5 text-white font-alegreya rounded-none focus:border-white/20 placeholder:text-slate-100/30 ${
              errors && errors.jobDescription ? "border-primary" : ""
            }`}
          />
          {errors.jobDescription && (
            <span className="text-red-500 lg:text-sm text-xs font-secondary w-full text-start">
              {errors.jobDescription.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className={` py-2 lg:px-8 md:px-8 font-secondary font-semibold text-sm bg-primary border border-primary hover:border-white/40 relative text-white group w-full text-center ${
            isLoading || isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "..." : "Generate Feedback"}
        </button>
      </form>
    </div>
  );
};

export default ResumeParserForm;
