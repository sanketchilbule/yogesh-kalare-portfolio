import React from "react";

const Video = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Interior Design
      </h2>
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
