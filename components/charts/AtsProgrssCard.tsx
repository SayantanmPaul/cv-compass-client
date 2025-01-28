import { cn } from "@/lib/utils";
import DynamicTooltip from "../app-ui/dynamic-tooltip";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ProgressBarProps {
  progress?: number;
}
const AtsProgrssCard = ({ progress }: ProgressBarProps) => {
  const dots = Array.from({ length: 25 }, (_, i) => i);

  if (!progress) {
    return <AtsProgrssCardSkeleton />;
  }

  const isProgrssDots = (index: number) => index < Math.ceil(progress / 4);
  return (
    <Card className="w-full h-full">
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-alegreya font-semibold pt-4 pb-3 flex items-center ">
            Overall Score{" "}
            <DynamicTooltip content="This score may not be optimal everytime" />
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
