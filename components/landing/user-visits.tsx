"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useVisitorCount } from "@/lib/react-query/queries";
import { motion } from "framer-motion";
import { ChartNoAxesCombinedIcon, GemIcon } from "lucide-react";
import { Icon } from "../FeatureCardsList";
import { GridPattern } from "../ui/file-upload";
import { NumberTicker } from "../ui/number-ticker";
import { Skeleton } from "../ui/skeleton";
import OpenStatusStat from "../app-ui/openstatus";

export default function LiveVisitorCount() {
  const { data, isLoading } = useVisitorCount();

  return (
    <Card className="w-full lg:max-w-7xl md:max-w-3xl max-w-full flex flex-col justify-center my-auto border border-[#d6be99]/40 relative lg:min-h-60 group">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-accent" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-accent" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-accent" />

      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,gray,transparent)] -z-10 ">
        <GridPattern />
      </div>
      <CardContent className="lg:p-6 md:p-3 p-6 w-full">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl w-full">
            <CardHeader className="p-0 space-y-2 z-30">
              <CardTitle className="font-alegreya italic text-4xl lg:text-5xl font-medium ">
                We value transparency
              </CardTitle>
              <p className="font-brand font-semibold text-sm lg:text-base text-accent px-1">
                Let us share how many users we are able to reach worldwide
              </p>
              <OpenStatusStat />
            </CardHeader>
          </div>
          <div className="w-full justify-evenly flex max-w-lg">
            <MetricsCard
              heading="Total Audience"
              count={data?.data.uniqueVisitorsCount}
              isLoading={isLoading}
              icon={
                <ChartNoAxesCombinedIcon
                  strokeWidth={1.5}
                  className="w-5 h-5 "
                />
              }
            />
            <MetricsCard
              heading="Event Count"
              count={data?.data.successfulFeedbacksCount}
              isLoading={isLoading}
              icon={<GemIcon strokeWidth={1.5} className="w-5 h-5 " />}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const MetricsCard = ({
  heading,
  count,
  icon,
  isLoading,
}: {
  heading: string;
  count: number;
  icon: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <div className="relative border-none w-full pt-10 max-w-40">
      <span className="p-1.5 rounded-full bg-transparent border border-[#d6be99]/40 absolute top-0 left-0 group-hover:text-accent duration-300 ease-in-out">
        {icon}
      </span>
      <h3 className=" font-alegreya font-semibold mb-2 text-2xl">{heading}</h3>
      {!isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end"
        >
          <NumberTicker
            value={count}
            className="text-4xl sm:text-4xl font-semibold font-brand text-orange-300"
          />
          <p className="text-2xl sm:text-2xl font-medium font-brand h-fit text-accent">
            +
          </p>
        </motion.div>
      ) : (
        <Skeleton className="w-24 h-8" />
      )}
    </div>
  );
};
