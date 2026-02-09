import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Interior Design
      </h2>
      <Link 
        to="/video" 
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Watch Video
      </Link>
    </div>
  );
};

export default Video;
