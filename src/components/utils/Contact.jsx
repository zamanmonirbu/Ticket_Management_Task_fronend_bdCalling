import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
    
    // Simulating form submission
    setStatus('Thank you for your message! We will get back to you soon.');
    
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Contact Us</h2>
      
      {status && (
        <p className={`text-lg text-center mb-4 ${status.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-lg text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-lg text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium text-lg text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your message"
            rows="4"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
