
const About = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">About Our Bus Service</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our bus booking service! We provide convenient and affordable transportation
        options to help you get to your destination with ease. Whether you are traveling for business,
        leisure, or any other purpose, our fleet of buses ensures a safe and comfortable journey.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our user-friendly app allows you to browse available buses, select your desired seats, and
        book tickets in just a few clicks. We are committed to offering top-notch services to make
        your travel experience hassle-free.
      </p>
      <h3 className="text-2xl font-semibold text-center text-blue-600 mt-6">Why Choose Us?</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>Convenient seat selection</li>
        <li>Affordable prices</li>
        <li>Safe and comfortable journey</li>
        <li>Easy-to-use mobile app</li>
        <li>Customer support available 24/7</li>
      </ul>
    </div>
  );
};

export default About;
