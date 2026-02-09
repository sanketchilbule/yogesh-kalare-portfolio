import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoPage = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const correctPassword = "1234";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controlsList.add("nodownload");
      videoRef.current.addEventListener("contextmenu", (e) => e.preventDefault());
    }
  }, [isUnlocked]);

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
          </div>
        </header>
        <div className="flex-1 flex justify-center items-center px-4">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interior Design Video</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-center">Password Protected</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Unlock Video
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
