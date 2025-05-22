import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import IconMapper from './IconMapper';

const EventCard = ({ event, index, onClick }) => (
  <motion.div
    key={event.date}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    onClick={() => onClick(event)}
  >
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 md:h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="md:w-2/3 p-6">
        <div className="flex items-center mb-4">
          <IconMapper type={event.icon} />
          <span className="ml-2 text-sm font-medium text-gray-600">{event.date}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default EventCard;
