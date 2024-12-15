import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Simulating form submission
    setStatus("Thank you for your message! We will get back to you soon.");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  // Framer motion variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 }
    })
  };

  const statusVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen gradient-bg p-6"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl"
        variants={containerVariant}
      >
        <motion.h2 
          className="text-4xl font-bold text-center text-blue-700 mb-6"
          variants={formItemVariant}
          custom={0}
        >
          Contact Us
        </motion.h2>

        {status && (
          <motion.p 
            className={`text-center p-3 mb-6 rounded-lg text-white font-medium ${
              status.includes("Thank you") ? "bg-green-500" : "bg-red-500"
            }`}
            initial="hidden"
            animate="visible"
            variants={statusVariant}
          >
            {status}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className="flex flex-col"
            variants={formItemVariant}
            custom={1}
          >
            <label htmlFor="name" className="font-medium text-lg text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div 
            className="flex flex-col"
            variants={formItemVariant}
            custom={2}
          >
            <label htmlFor="email" className="font-medium text-lg text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div 
            className="flex flex-col"
            variants={formItemVariant}
            custom={3}
          >
            <label
              htmlFor="message"
              className="font-medium text-lg text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows="6"
            />
          </motion.div>

          <motion.div 
            className="flex justify-center"
            variants={formItemVariant}
            custom={4}
          >
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              Submit
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
