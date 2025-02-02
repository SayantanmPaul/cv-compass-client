import { useMutation, useQuery } from "@tanstack/react-query";
import { FormInput } from "../types";
import { generateFeedback, getVisitsCount } from "@/api/apiClient";

export const useGenerateFeadback = () => {
  return useMutation({
    mutationFn: (data: FormInput) => {
      return generateFeedback(data);
    },
  });
};

export const useVisitorCount = () => {
  return useQuery({
    queryKey: ["visits"],
    queryFn: async () => {
      const data = await getVisitsCount();
      return data;
    },
  });
};
