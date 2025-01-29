"use client";

import lottie from "lottie-web";
import { useEffect } from "react";

const UnderLineLottie = () => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("glint")!,
      renderer: "svg",
      autoplay: false,
      loop: false,
      path: "/bg-assets/underline-lottie3.json",
    });

    setTimeout(() => {
      animation.play();
    }, 1400);

    return () => animation.destroy();
  }, []);

  return <div id="glint" className="w-36 h-8"></div>;
};

export default UnderLineLottie;
