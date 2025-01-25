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

const atsData = {
  atsScore: 48,
  atsBreakDown: {
    "Keyword Matching": 43,
    Experiences: 20,
    "Project Relevance": 25,
    Achievements: 12,
  },
};

const chartData = Object.entries(atsData.atsBreakDown).map(
  ([category, value]) => ({
    category,
    value,
    fill: `hsl(var(--chart-${
      Object.keys(atsData.atsBreakDown).indexOf(category) + 1
    }))`,
  })
);

const chartConfig = {
  value: {
    label: "Score",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

let footerMessage = "";
let trendingIcon = null;

if (atsData.atsScore >= 70) {
  footerMessage = "High Match: Candidate is highly suitable for this role.";
  trendingIcon = <TrendingUp className="h-4 w-4 text-green-500 " />;
} else if (atsData.atsScore >= 50) {
  footerMessage = "Modarate Match: candidate required a recheck for this role.";
  trendingIcon = <TrendingUp className="h-4 w-4 text-yellow-500" />;
} else {
  footerMessage = "Low Match: Candidate may not be a strong fit for this role.";
  trendingIcon = <TrendingUp className="h-4 w-4 text-red-500" />;
}
const AtsBreakdownBarChart = () => {
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
