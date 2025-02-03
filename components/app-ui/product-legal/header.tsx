import { LineShadowText } from "@/components/ui/line-shadow-text";
import { useTheme } from "next-themes";

export const ProductLegalHeader = ({ header }: { header: string }) => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <LineShadowText
      className="italic text-center w-full text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-5xl lg:text-7xl font-alegreya items-center flex"
      shadowColor={shadowColor}
    >
      {header}
    </LineShadowText>
  );
};

export const ProductLegalDateWritten = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <span className="text-sm text-accent font-secondary font-semibold">
        Last updated: 3rd February 2025
      </span>
    </div>
  );
};
