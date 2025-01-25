import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserPreferences {
  userType: { recruiter: boolean; candidate: boolean };
  setUserType: (type: "recruiter" | "candidate") => void;
}

export const useAppStore = create<UserPreferences>()(
  persist(
    (set) => ({
      userType: { recruiter: true, candidate: false },
      setUserType: (type) =>
        set(() => ({
          userType: {
            recruiter: type === "recruiter",
            candidate: type === "candidate",
          },
        })),
    }),
    {
      name: "cvcompass-userpreference",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
