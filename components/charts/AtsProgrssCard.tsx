import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ProgressBarProps {
  progress: number;
}
const AtsProgrssCard = ({ progress }: ProgressBarProps) => {
  const dots = Array.from({ length: 25 }, (_, i) => i);
  const isProgrssDots = (index: number) => index < Math.ceil(progress / 4);

  if (!progress) {
    return <AtsProgrssCardSkeleton />;
  }

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
                    isProgrssDots(index) ? "bg-primary" : "bg-[#3C3D37]"
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

const AtsProgrssCardSkeleton = () => {
  const dots = Array.from({ length: 25 }, (_, i) => i);

  return (
    <Card className="w-full h-full">
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-alegreya font-semibold pt-4 pb-3 flex items-center gap-3">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
          <Skeleton className="w-12 h-4 mb-3" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex gap-1 justify-between">
              {dots.map((_, index) => (
                <Skeleton key={index} className="h-8 flex-1 rounded" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
