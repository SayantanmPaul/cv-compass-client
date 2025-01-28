"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
import { AtsBreakDownType } from "@/lib/types";

const AtsBreakdownBarChart = ({
  atsBreakDownData,
  atsScore,
}: {
  atsBreakDownData?: AtsBreakDownType;
  atsScore?: number;
}) => {
  if (!atsBreakDownData || !atsScore) {
    return <BarChartSkeleton />;
  }

  const keyNames: Record<string, string> = {
    keywordMatching: "keyword Matches",
    yearsOfExperience: "Experience",
    quantifiableAchievements: "Achievements",
    projectRelevance: "Project Relevance",
  };

  const chartData = Object.entries(atsBreakDownData).map(
    ([category, value]) => ({
      category: keyNames[category] || category,
      value: value,
      fill: `hsl(var(--chart-${
        Object.keys(atsBreakDownData).indexOf(category) + 1
      }))`,
    })
  );

  let footerMessage = "";
  let trendingIcon = null;

  if (atsScore >= 70) {
    footerMessage = "High Match: Candidate is highly suitable for this role.";
    trendingIcon = <TrendingUp className="h-4 w-4 text-green-500 " />;
  } else if (atsScore >= 50) {
    footerMessage =
      "Modarate Match: candidate required a recheck for this role.";
    trendingIcon = <TrendingUp className="h-4 w-4 text-yellow-500" />;
  } else {
    footerMessage =
      "Low Match: Candidate may not be a strong fit for this role.";
    trendingIcon = <TrendingUp className="h-4 w-4 text-red-500" />;
  }

  const chartConfig = {
    value: {
      label: "Score",
    },
    label: {
      color: "hsl(var(--background))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-alegreya">Strength Chart</CardTitle>
        <CardDescription className="font-secondary text-xs">
          Breakdown of the candidate&apos;s strengths
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
              // barSize={36}
            >
              <LabelList
                dataKey="category"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label] font-secondary text-xs font-semibold text-primary-foreground"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground font-secondary"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="font-medium leading-none font-alegreya inline-flex items-center gap-1 lg:text-sm md:text-sm text-xs">
          {footerMessage}
          <span className=" inline-flex">{trendingIcon}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AtsBreakdownBarChart;

const BarChartSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-alegreya">
          <Skeleton className="h-6 w-36" />
        </CardTitle>
        <CardDescription className="font-secondary text-xs">
          <Skeleton className="h-4 w-56" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="lg:h-60 h-44 w-full flex flex-col gap-2 pt-4 px-1">
          <Skeleton className="h-full w-2/3 rounded-md" />
          <Skeleton className="h-full w-1/3 rounded-md" />
          <Skeleton className="h-full w-1/2 rounded-md" />
          <Skeleton className="h-full w-1/5 rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 pt-4 pb-7 text-sm">
        <div className="font-medium leading-none font-alegreya inline-flex items-center gap-1 lg:text-sm md:text-sm text-xs">
          <Skeleton className="h-4 w-80" />
        </div>
      </CardFooter>
    </Card>
  );
};
