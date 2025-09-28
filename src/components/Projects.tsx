// import React, { useState } from "react";
// import { ExternalLink } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Architectural Drawings",
//       category: "Commercial",
//       image: "/service-1.jpg",
//       //   image:
//       //     "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//       description:
//         "A state-of-the-art office complex featuring sustainable design and modern amenities.",
//     },
//     {
//       title: "Structural Drawings",
//       category: "Residential",
//       image:
//         "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//       description:
//         "Custom luxury homes with premium finishes and smart home technology integration.",
//     },
//     {
//       title: "3D Elevation & Interior Designs",
//       category: "Infrastructure",
//       image:
//         "https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//       description:
//         "Major infrastructure project connecting downtown areas with innovative engineering.",
//     },
//   ];

//   const [selectedProject, setSelectedProject] = useState<null | any>(null);
//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Take a look at some of our completed projects that showcase our
//             commitment to quality, innovation, and client satisfaction.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//                   <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
//                     {project.category}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

("use client");
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Architectural Drawings",
      category: "Commercial",
      image: "/service-3.jpg",
      //   image:
      //     "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description:
        "A state-of-the-art office complex featuring sustainable design and modern amenities.",
    },
    {
      title: "Structural Drawings",
      category: "Residential",
      image: "/service-2.jpg",
      description:
        "Custom luxury homes with premium finishes and smart home technology integration.",
    },
    {
      title: "3D Elevation & Interior Designs",
      category: "Infrastructure",
      image: "/service-5.jpg",
      description:
        "Major infrastructure project connecting downtown areas with innovative engineering.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<null | any>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our completed projects that showcase our
            commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    project.isPdf
                      ? "https://cdn-icons-png.flaticon.com/512/337/337946.png"
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full p-4">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedProject.title}
            </h3>

            {/* Show Map / PDF / Image */}
            {selectedProject.mapUrl ? (
              <iframe
                src={selectedProject.mapUrl}
                className="w-full h-[70vh] rounded"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : selectedProject.isPdf ? (
              <iframe
                src={selectedProject.image}
                className="w-full h-[70vh] rounded"
                title="PDF Viewer"
              ></iframe>
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[70vh] object-contain rounded"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
