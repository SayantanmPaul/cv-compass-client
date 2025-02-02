import {
  AmpersandIcon,
  BrainIcon,
  ChartBarBigIcon,
  CpuIcon,
  FlameKindlingIcon,
  LightbulbIcon,
} from "lucide-react";
import { SVGProps, useId } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export function FeaturesCardList() {
  return (
    <div className="">
      <div className="flex flex-wrap max-w-8xl gap-6 justify-center items-center">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className={`relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white  border border-[#d6be99]/40 group lg:h-60 md:h-80 h-auto hover:shadow-2xl duration-300 ease-in-out w-full lg:max-w-80 md:max-w-[228px] max-w-1/2`}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-accent" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-accent" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-accent" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-accent" />

            <div className="relative overflow-hidden w-full h-full p-6">
              <span className="p-1.5 rounded-full bg-transparent  border-slate-100/30 border group-hover:border-accent absolute top-12 left-6 group-hover:text-accent duration-500 ease-in-out">
                {feature.icon}
              </span>
              <div className="pt-20">
                <p className="text-base font-semibold font-brand text-accent group-hover:text-primary relative duration-500 ease-in-out">
                  {feature.title}
                </p>
                <p className="text-neutral-200 mt-2 text-base font-medium relative  font-alegreya">
                  {feature.description}
                </p>
              </div>
              <Grid size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// actaul data
const grid = [
  {
    title: "Powered by LLM",
    description:
      "Our application relies on Llama3 model by Meta to review and score the candidates strength.",
    icon: <BrainIcon strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    title: "No Login Flow",
    description:
      "Breaking extra barrier between user and the application. Get started instantly, no sign-up hassle.",
    icon: <FlameKindlingIcon strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    title: "Local Processing",
    description:
      "As there's no user database, most of your data is stored and managed from your cached memory.",
    icon: <CpuIcon strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    title: "Interactive Charts",
    description:
      "Dynamic, interactive charts to visualize the candidate's strengths, weaknesses, and key insights to make quick decitions.",
    icon: <ChartBarBigIcon strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    title: "Personalized Feedback",
    description:
      "Job description specific feedbacks and recomandations to improve candidate's performance.",
    icon: <LightbulbIcon strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    title: "Open Source",
    description:
      "Code that you can trust. Join us on Github and contirute your ideas and improvements to make impact.",
    icon: <AmpersandIcon className="w-5 h-5" />,
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  className,
  ...props
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
