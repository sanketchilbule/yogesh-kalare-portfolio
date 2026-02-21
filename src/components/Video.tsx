import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controlsList.add("nodownload");
      videoRef.current.addEventListener("contextmenu", (e) =>
        e.preventDefault(),
      );
    }
  }, []);

  return (
    <div className="w-full flex justify-center flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Interior Design
      </h2>
      <video
        ref={videoRef}
        className="rounded-lg shadow-lg max-w-full"
        width="800"
        height="450"
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* <source src="/Hanuman Mandir - Kachurwahi.mp4" type="video/mp4" /> */}
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link
        to="/video"
        className="mt-4 text-blue-600 hover:text-blue-800 underline"
      >
        View Full Screen
      </Link>
    </div>
  );
};

export default Video;
