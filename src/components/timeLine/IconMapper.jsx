import { Calendar, Flag, Swords } from 'lucide-react';

const IconMapper = ({ type }) => {
  switch (type) {
    case 'battle':
      return <Swords className="w-6 h-6 text-red-700" />;
    case 'occupation':
      return <Flag className="w-6 h-6 text-gray-700" />;
    case 'liberation':
      return <Flag className="w-6 h-6 text-green-700" />;
    case 'victory':
      return <Flag className="w-6 h-6 text-[#C62828]" />;
    default:
      return <Calendar className="w-6 h-6 text-blue-700" />;
  }
};

export default IconMapper;
