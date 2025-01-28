import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { InfoIcon } from "lucide-react";

const DynamicTooltip = ({ content }: { content: string }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger type="button" aria-label="tooltip">
          <InfoIcon className="w-4 h-4 ml-2" />
        </TooltipTrigger>
        <TooltipContent
          align="start"
          className="text-xs font-secondary rounded-none bg-background border-[#D7700B]/20 select-none max-w-md"
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DynamicTooltip;
