
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useTheme, Theme } from '../../context/ThemeContext';

function Interests() {

  const interests = [
    'Community Building',
    'Frontend & Mobile Development (React, React Native)',
    'Blockchain and Agricultural Technology',
    'AI Tools and Applications',
    'Empowering Farmers through Tech',
    'Sharing Knowledge and Collaboration',
    'Exploring Open-Source Projects',
    'Building Startups',
  ];

  const { theme } = useTheme();

  return (
    <div className="w-full my-10 py-4">
      <p className="text-center mb-3 italic font-semibold">My Interests</p>
      <Marquee speed={60} direction='right'>
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center w-40 h-40 mx-4 rounded-lg shadow-lg
              ${theme === Theme.Dark ? 'bg-gray-900' : 'bg-gray-100'}
            `}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:text-3xl text-xl text-green-500 mb-2">
              {/* Here you can add an icon or a graphic */}
            </div>
            <p className={`text-center font-medium ${theme === Theme.Dark ? 'text-gray-200' : ''}`}>
              {interest}
            </p>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}

export default Interests;
