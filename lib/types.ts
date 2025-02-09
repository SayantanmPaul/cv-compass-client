export interface FormInput {
  jobDescription: string;
  resume: File | null;
  modelName:
    | "Llama-3.3-70b-versatile"
    | "DeepSeek-R1-Distill-Qwen-32B"
    | "DeepSeek-R1-Distill-Llama-8B (fine tuned)";
}

export interface AtsBreakDownType {
  keywordMatching: number;
  yearsOfExperience: number;
  projectRelevance: number;
  quantifiableAchievements: number;
}

export interface ATSFeedback {
  atsScore: number;
  atsBreakDown: AtsBreakDownType;
  summary: string;
  relavantKeywords: string[];
  missingKeywords: string[];
  feedback: string[];
  jobDescription: string;
  resumeUrl: string | null;
  resumeFileName: string | null;
}
