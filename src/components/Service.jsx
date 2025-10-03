import React from "react";
import "./service.css"
import { Code, Cpu, Palette, Film, Image, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    title: "Website Designing",
    description: "Creative, responsive and modern websites tailored to your business needs.",
    icon: <Code className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "IoT Projects",
    description: "Smart IoT solutions for automation, monitoring, and connectivity.",
    icon: <Cpu className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Logo Designing",
    description: "Unique and professional logo designs that represent your brand identity.",
    icon: <Palette className="w-10 h-10 text-pink-600" />,
  },
  {
    title: "Video Editing",
    description: "High-quality video editing with smooth transitions and engaging effects.",
    icon: <Film className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Poster Making",
    description: "Attractive posters and flyers designed to grab attention instantly.",
    icon: <Image className="w-10 h-10 text-yellow-600" />,
  },
  {
    title: "App Development",
    description: "Cross-platform mobile apps with smooth UI and great performance.",
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Website Maintenance",
    description: "Keep your website updated, secure, and running smoothly.",
    icon: <Wrench className="w-10 h-10 text-gray-600" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 dark:bg-transparent">
     <div className="custom">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Our Services</h1>
        <p className="text-lg text-black mb-12 mt-12 dark:text-white">
          We provide a wide range of creative and technical services to help your business grow.
        </p>

        <div className="grid gap-8 sm:grid-cols-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-black">{service.title}</h2>
              <p className="text-black mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default ServicesPage;
