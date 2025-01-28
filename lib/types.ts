export interface FormInput {
  jobDescription: string;
  resume: File | null;
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
