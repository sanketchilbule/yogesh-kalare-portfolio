import React from "react";
import { Award, Users, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hello Everyone, My name is Yogesh Narayan Kalare
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I am a Civil Engineer with a Master's Degree in Structural
              Engineering (M.Tech). My expertise lies in structural analysis,
              design, and planning, with proficiency in software such as
              AutoCAD, Revit, STAAD Pro, ETABS, and BIM modelling tools.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I am dedicated to developing safe and efficient structures that
              meet technical standards and client requirements. I have
              experience in architectural planning, 3D elevation design,
              interior design, MEP layouts, and preparing sanction drawings for
              residential and commercial projects. Furthermore, I am skilled in
              conducting cost estimates, performing quantity takeoffs, and
              creating Bar Bending Schedules (BBS), as well as managing billing
              and site supervision. I strive for precision, quality, and client
              satisfaction in all my work, ensuring a balance between creativity
              and structural integrity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/src/me-portfolio.png"
              // src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Construction team"
              className="w-full h-96 lg:h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
