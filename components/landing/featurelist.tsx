import Image from "next/image";
import { FeaturesCardList } from "../FeatureCardsList";
import { FlipWords } from "../ui/flip-words";

const FeatureList = () => {
  return (
    <div id="features" className="flex flex-col items-center gap-6 lg:gap-10 ">
      <div className="lg:px-8 md:px-0 items-start md:justify-center w-full">
        <HeaderText />
      </div>
      <FeaturesCardList />
    </div>
  );
};

export default FeatureList;

const HeaderText = () => {
  const words = ["matter the most", "push boundaries", "make differences"];

  return (
    <div className="flex flex-col w-fit gap-1">
      <div className="font-alegreya italic lg:text-[54px] text-4xl font-semibold z-10 w-full">
        Features <br className="lg:hidden md:hidden block" /> that
        <FlipWords words={words} duration={3500} />
      </div>
      <div className="lg:max-w-[620px] md:max-w-[26rem] max-w-0">
        <UnderLineSVG />
      </div>
    </div>
  );
};

const UnderLineSVG = () => {
  return (
    <Image
      src="/bg-assets/long-underline.svg"
      alt="underline-svg"
      width={700}
      height={700}
      className="w-full h-full select-none"
      draggable={false}
    />
  );
};
