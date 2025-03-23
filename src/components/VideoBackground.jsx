"use client";
import React from "react";

const VideoBackground = ({
    videoSrc = "",
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={"https://drive.google.com/file/d/1FLEhEdJyFdYRnksfNeiY_zp4HwKn2vSb/preview"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
