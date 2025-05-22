import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Shield, MapPin, FileText, Heart } from 'lucide-react';

const SectionLinks = () => {
  const sections = [
    {
      title: 'Хронология войны',
      description: 'Ключевые события 1941-1945 годов',
      icon: <Clock className="h-12 w-12" />,
      color: 'bg-red-100 text-red-800',
      path: '/timeline'
    },
    {
      title: 'Люди Победы',
      description: 'Герои фронта и тыла',
      icon: <Users className="h-12 w-12" />,
      color: 'bg-blue-100 text-blue-800',
      path: '/heroes'
    },
    {
      title: 'Оружие Победы',
      description: 'Техника и вооружение',
      icon: <Shield className="h-12 w-12" />,
      color: 'bg-green-100 text-green-800',
      path: '/victory-weapons'
    },
    {
      title: 'Места памяти',
      description: 'Памятники и мемориалы',
      icon: <MapPin className="h-12 w-12" />,
      color: 'bg-yellow-100 text-yellow-800',
      path: '/memorials'
    },
    {
      title: 'Документы Победы',
      description: 'Архивные материалы',
      icon: <FileText className="h-12 w-12" />,
      color: 'bg-purple-100 text-purple-800',
      path: '/documents'
    },
    {
      title: 'Дети войны',
      description: 'Истории и воспоминания',
      icon: <Heart className="h-12 w-12" />,
      color: 'bg-pink-100 text-pink-800',
      path: '/rear'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-8 text-center">
          Разделы сайта
          <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.path}
              className="group border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className={`inline-flex rounded-full p-3 ${section.color} mb-4`}>
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#C62828] transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-700">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionLinks;
