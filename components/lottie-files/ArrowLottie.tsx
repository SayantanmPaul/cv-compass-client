"use client";

import lottie from "lottie-web";
import { useEffect } from "react";

const ArrowLottie = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const animation = lottie.loadAnimation({
        container: document.getElementById("arrow")!,
        renderer: "svg",
        autoplay: false,
        loop: false,
        path: "/bg-assets/arrow-lottie2.json",
      });

      setTimeout(() => {
        animation.play();
      }, 1000);

      return () => animation.destroy();
    }
  }, []);
  return (
    <div
      id="arrow"
      className="h-40 w-full max-w-32 lg:scale-150 scale-125"
    ></div>
  );
};

export default ArrowLottie;
