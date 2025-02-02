"use client";

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaTrigger
} from "@/components/ui/credenza";

import ReactPlayer from "react-player/youtube";

const DemoYoutubeModal = () => {

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <button
          className={
            "font-secondary font-bold text-sm relative text-white text-center group flex items-center justify-center gap-2 underline-offset-2 hover:gap-3 ease-in-out duration-200 border border-white lg:border-none md:border-none w-full md:w-auto lg:w-auto py-2 "
          }
        >
          <p className="lg:underline md:underline">See a quick demo</p>
          -&gt;
        </button>
      </CredenzaTrigger>
      <CredenzaContent className="w-full lg:max-w-6xl max-w-2xl lg:h-auto md:h-auto h-72 lg:border md:border lg:border-primary md:border-primary bg-[#1B2529] overflow-hidden">
        <CredenzaBody className="flex items-center justify-center w-full">
          <div className="w-full h-full aspect-video relative">
            
            <ReactPlayer
              url="https://www.youtube.com/watch?v=00Q0G84kq3M"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};

export default DemoYoutubeModal;
