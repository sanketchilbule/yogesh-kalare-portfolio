import React from 'react';
import { Home, Building, Wrench, Hammer, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom-built homes designed with care, quality, and Austin\'s unique character in mind.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Professional office buildings and retail spaces designed for business success and growth.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with expert renovation services that breathe new life into your property.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Hammer,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, bridges, and public facilities built to last.',
      image: 'https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Shield,
      title: 'Safety Consulting',
      description: 'Comprehensive safety assessments and consulting services for all construction projects.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency construction and repair services when you need immediate professional assistance.',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services to meet all your building needs, 
            from residential projects to large-scale commercial developments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Large Background Image */}
              <div className="relative overflow-hidden rounded-2xl h-64 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlapping White Card */}
              <div className="relative -mt-16 mx-4 bg-white rounded-xl shadow-lg p-6 group-hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="mb-4">
                  <service.icon className="h-8 w-8 text-green-800 stroke-1 group-hover:text-green-900 group-hover:scale-110 transition-all duration-200" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-900 transition-colors duration-200">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <button className="text-green-800 font-semibold hover:text-green-900 transition-colors duration-200 group">
                  <span className="border-b-2 border-green-800 hover:border-green-900 transition-colors duration-200">
                    ENQUIRE NOW
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;