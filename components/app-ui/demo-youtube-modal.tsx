"use client";

import HeroVideoDialog from "../magicui/hero-video-dialog";

const DemoYoutubeModal = () => {
  return (
    <div className="relativr">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/DSgkDuNaWao?rel=0"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/DSgkDuNaWao?rel=0"
      />
    </div>
  );
};

export default DemoYoutubeModal;
