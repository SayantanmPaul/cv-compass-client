import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProgressBarProps {
  progress: number;
}
const AtsProgrssCard = ({ progress }: ProgressBarProps) => {
  const dots = Array.from({ length: 25 }, (_, i) => i);
  const isProgrssDots = (index: number) => index < Math.ceil(progress / 4);

  return (
    <Card className="w-full h-full">
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-alegreya font-semibold pt-4 pb-3 flex items-center gap-3 ">
            Overall Score <HeaderTooltipContent />
          </div>
          <p className="pb-3 font-secondary font-semibold text-sm select-none">
            {progress} %
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex gap-1 justify-between ">
              {dots.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-8 flex-1 rounded transition-colors",
                    isProgrssDots(index) ? "bg-[#D7700B]" : "bg-muted"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AtsProgrssCard;

const HeaderTooltipContent = () => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger type="button" aria-label="tooltip">
          <InfoIcon className="w-4 h-4" />
        </TooltipTrigger>
        <TooltipContent
          align="start"
          className="text-xs font-secondary rounded-none bg-background border-[#D7700B]/20 select-none "
        >
          <p>This score may not be optimal everytime</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
