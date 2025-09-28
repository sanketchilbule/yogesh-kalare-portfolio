import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Construction site"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Er. Yogesh Kalare
          </h1>
          <h2 className="text-white text-2xl font-semibold">
            Civil Engineer / Structural Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed mt-5">
            Civil Engineer with a Master’s in Structural Engineering, skilled in
            structural design, drafting, project documentation, and field
            supervision about 5+ years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/dist/assets/Yogesh_Kalare_Resume.pdf"
              download="My_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 group"
            >
              Resume
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/yogesh-kalare-5047011a7/?trk=opento_sprofile_topcard"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
