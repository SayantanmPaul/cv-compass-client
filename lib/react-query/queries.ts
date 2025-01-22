import { useMutation } from "@tanstack/react-query";
import { FormInput } from "../types";
import { generateFeedback } from "@/api/apiClient";

export const useGenerateFeadback = () => {
  return useMutation({
    mutationFn: (data: FormInput) => {
      return generateFeedback(data);
    },
  });
};
