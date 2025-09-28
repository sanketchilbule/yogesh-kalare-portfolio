import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">Yogesh kalare</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Civil Engineer with a Master’s in Structural Engineering, skilled
              in structural design, drafting, project documentation, and field
              supervision about 5+ years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-gray-300">7083183107</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-gray-300">ykalare3@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-gray-300">
                  Shivnagar, Parsoda , Ramtek, Nagpur
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Renovation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Infrastructure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Yogesh kalare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
