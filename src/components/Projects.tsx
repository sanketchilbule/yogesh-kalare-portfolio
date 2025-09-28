"use client";
import React, { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "A state-of-the-art office complex featuring sustainable design and modern amenities.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590447!3d-37.8162797427519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777dfd9e9b5a1d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1695805366273!5m2!1sen!2sin",
    },
    {
      title: "Luxury Residential Estate",
      category: "Residential",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "Custom luxury homes with premium finishes and smart home technology integration.",
    },
    {
      title: "Downtown Bridge Project",
      category: "Infrastructure",
      image:
        "https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "Major infrastructure project connecting downtown areas with innovative engineering.",
    },
    {
      title: "Shopping Center Renovation",
      category: "Renovation",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "Complete renovation of aging shopping center into modern retail destination.",
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "Large-scale industrial facility designed for optimal logistics and operations.",
    },
    {
      title: "Community Center",
      category: "Public",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description:
        "Multi-purpose community center serving local residents with various facilities.",
    },
    {
      title: "Project Report",
      category: "Documentation",
      image: "/dist/assets/Yogesh_Kalare_Resume.pdf",
      description: "Full project documentation in PDF format.",
      isPdf: true,
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

// "use client";
// import React, { useState } from "react";
// import { ExternalLink, X } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Modern Office Complex",
//       category: "Commercial",
//       image:
//         "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "A state-of-the-art office complex featuring sustainable design and modern amenities.",
//     },
//     {
//       title: "Luxury Residential Estate",
//       category: "Residential",
//       image:
//         "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "Custom luxury homes with premium finishes and smart home technology integration.",
//     },
//     {
//       title: "Downtown Bridge Project",
//       category: "Infrastructure",
//       image:
//         "https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "Major infrastructure project connecting downtown areas with innovative engineering.",
//     },
//     {
//       title: "Shopping Center Renovation",
//       category: "Renovation",
//       image:
//         "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "Complete renovation of aging shopping center into modern retail destination.",
//     },
//     {
//       title: "Industrial Warehouse",
//       category: "Industrial",
//       image:
//         "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "Large-scale industrial facility designed for optimal logistics and operations.",
//     },
//     {
//       title: "Community Center",
//       category: "Public",
//       image:
//         "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
//       description:
//         "Multi-purpose community center serving local residents with various facilities.",
//     },
//     // Example PDF project
//     {
//       title: "Project Report",
//       category: "Documentation",
//       image: "/dist/assets/Yogesh_Kalare_Resume.pdf", // use your PDF file path
//       description: "Full project documentation in PDF format.",
//       isPdf: true,
//     },
//   ];

//   const [selectedProject, setSelectedProject] = useState<null | any>(null);

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Take a look at some of our completed projects that showcase our
//             commitment to quality, innovation, and client satisfaction.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={
//                     project.isPdf
//                       ? "https://cdn-icons-png.flaticon.com/512/337/337946.png" // PDF icon
//                       : project.image
//                   }
//                   alt={project.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div
//                   onClick={() => setSelectedProject(project)}
//                   className="absolute inset-0 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
//                 >
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

//       {/* Modal Popup */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
//           <div className="relative bg-white rounded-lg max-w-4xl w-full p-4">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-700 hover:text-black"
//               onClick={() => setSelectedProject(null)}
//             >
//               <X className="h-6 w-6" />
//             </button>

//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               {selectedProject.title}
//             </h3>

//             {/* Show Image or PDF */}
//             {selectedProject.isPdf ? (
//               <iframe
//                 src={selectedProject.image}
//                 className="w-full h-[70vh] rounded"
//                 title="PDF Viewer"
//               ></iframe>
//             ) : (
//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="w-full max-h-[70vh] object-contain rounded"
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;

// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Modern Office Complex',
//       category: 'Commercial',
//       image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.',
//     },
//     {
//       title: 'Luxury Residential Estate',
//       category: 'Residential',
//       image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'Custom luxury homes with premium finishes and smart home technology integration.',
//     },
//     {
//       title: 'Downtown Bridge Project',
//       category: 'Infrastructure',
//       image: 'https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'Major infrastructure project connecting downtown areas with innovative engineering.',
//     },
//     {
//       title: 'Shopping Center Renovation',
//       category: 'Renovation',
//       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'Complete renovation of aging shopping center into modern retail destination.',
//     },
//     {
//       title: 'Industrial Warehouse',
//       category: 'Industrial',
//       image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'Large-scale industrial facility designed for optimal logistics and operations.',
//     },
//     {
//       title: 'Community Center',
//       category: 'Public',
//       image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
//       description: 'Multi-purpose community center serving local residents with various facilities.',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Take a look at some of our completed projects that showcase our commitment
//             to quality, innovation, and client satisfaction.
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
