"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "../ui/skeleton";

const atsData = {
  atsScore: 67,
  atsBreakDown: {
    "Keyword Matches": 43,
    Experiences: 20,
    "Project Relevance": 25,
    Achievements: 12,
  },
};

const raderPlotData = Object.entries(atsData.atsBreakDown).map(
  ([category, value]) => ({
    category: category,
    value: value,
  })
);

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const ATSBreakDownRaderChart = () => {
  const totalScore = Object.values(atsData.atsBreakDown).reduce(
    (sum, value) => sum + value,
    0
  );
  const percentageIncrease =
    ((atsData.atsScore - totalScore) / totalScore) * 100;

  if (!atsData) {
    return <RaderCardSkeleton />;
  }

  return (
    <Card>
      <CardHeader className="items-center pb-4 ">
        <CardTitle className="font-alegreya">Candidate Evaluation</CardTitle>
        <CardDescription className="font-secondary text-muted-foreground text-xs">
          Overall evaluation of the candidate
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="max-w-full mx-auto max-h-72"
        >
          <RadarChart data={raderPlotData} className="w-full h-full">
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="category" className="font-secondary" />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
              className="w-full"
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {percentageIncrease > 0
            ? `Score Increased by ${percentageIncrease.toFixed(2)}%`
            : `Score is matching with total breakdown`}{" "}
          <TrendingUp
            className={`h-4 w-4 ${
              percentageIncrease > 0 ? "text-green-500" : "hidden"
            }`}
          />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
};

export default ATSBreakDownRaderChart;

const RaderCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle className="font-alegreya">
          <Skeleton className="h-6 w-48" />
        </CardTitle>
        <CardDescription className="font-secondary text-muted-foreground text-xs">
          <Skeleton className="h-4 w-64" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="max-w-full mx-auto max-h-72 flex items-center justify-center">
          <Skeleton className="w-64 h-60 rounded-full bg-transparent" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          <Skeleton className="h-4 w-40" />
        </div>
      </CardFooter>
    </Card>
  );
};
