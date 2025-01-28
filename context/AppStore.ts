import { ATSFeedback } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserPreferences {
  userType: { recruiter: boolean; candidate: boolean };
  setUserType: (type: "recruiter" | "candidate") => void;
  lastGeneratedFeedback: ATSFeedback | null;
  addLastGeneratedFeedback: (feedback: ATSFeedback) => void;
  listResults: ATSFeedback[];
  setListResults: (result: ATSFeedback[]) => void;
  // updateResultToList: (result: ATSFeedback[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAppStore = create<UserPreferences>()(
  persist(
    (set) => ({
      userType: { recruiter: true, candidate: false },
      lastGeneratedFeedback: null,
      listResults: [],
      isLoading: false,

      setUserType: (type) =>
        set(() => ({
          userType: {
            recruiter: type === "recruiter",
            candidate: type === "candidate",
          },
        })),

      addLastGeneratedFeedback: (feedback: ATSFeedback) =>
        set(() => ({
          lastGeneratedFeedback: feedback,
          // listResults: [...state.listResults, feedback].slice(0, 3),
        })),

      setListResults: (results: ATSFeedback[]) =>
        set(() => ({ listResults: results.slice(0, 3) })),

      setIsLoading: (isLoading: boolean) =>
        set(() => ({ isLoading: isLoading })),
    }),
    {
      name: "cvcompass-userpreference",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
