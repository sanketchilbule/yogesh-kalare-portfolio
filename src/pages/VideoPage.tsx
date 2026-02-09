import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controlsList.add("nodownload");
      videoRef.current.addEventListener("contextmenu", (e) => e.preventDefault());
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Interior Design Video</h1>
        <div className="flex justify-center">
          <video
            ref={videoRef}
            className="rounded-lg shadow-lg max-w-full"
            width="800"
            height="450"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/Hanuman Mandir - Kachurwahi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
