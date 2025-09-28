import React from "react";

const Video = () => {
  return (
    <div className="w-full flex justify-center">
      <video
        className="rounded-lg shadow-lg"
        width="800"
        height="450"
        controls
        autoPlay={false} // change to true if you want autoplay
        muted
        loop
      >
        <source
          src="/Dr. project-Living room-roaming video-20220918-104842.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
