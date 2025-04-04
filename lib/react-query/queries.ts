import { useMutation, useQuery } from "@tanstack/react-query";
import { FormInput } from "../types";
import {
  generateFeedback,
  getModelNames,
  getVisitsCount,
} from "@/api/apiClient";

export const useGetModelNames = () => {
  return useQuery({
    queryKey: ["model-names"],
    queryFn: async () => {
      const data = await getModelNames();
      return data;
    },
  });
};

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
