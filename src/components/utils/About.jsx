import { motion } from "framer-motion";

const About = () => {
  // Animation variants for Framer Motion
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen gradient-bg"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
        variants={itemVariant}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center text-blue-600 mb-4"
          variants={itemVariant}
        >
          About Our Bus Service
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-700 mb-4"
          variants={itemVariant}
        >
          Welcome to our bus booking service! We provide convenient and affordable
          transportation options to help you get to your destination with ease.
          Whether you are traveling for business, leisure, or any other purpose,
          our fleet of buses ensures a safe and comfortable journey.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-700 mb-4"
          variants={itemVariant}
        >
          Our user-friendly app allows you to browse available buses, select your
          desired seats, and book tickets in just a few clicks. We are committed
          to offering top-notch services to make your travel experience
          hassle-free.
        </motion.p>

        <motion.h3 
          className="text-2xl font-semibold text-center text-blue-600 mt-6"
          variants={itemVariant}
        >
          Why Choose Us?
        </motion.h3>

        <motion.ul 
          className="list-disc list-inside text-lg text-gray-700 mt-4"
          variants={containerVariant}
        >
          {['Convenient seat selection', 'Affordable prices', 'Safe and comfortable journey', 'Easy-to-use mobile app', 'Customer support available 24/7'].map((item, index) => (
            <motion.li 
              key={index} 
              className="mb-2"
              variants={itemVariant}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
