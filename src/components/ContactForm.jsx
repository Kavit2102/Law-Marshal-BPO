import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons
import Pigeon from './Pigeon'; // Adjust the path based on your folder structure

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Thank you for contacting us!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-900 py-10">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-white mb-6 flex items-center">
            <Pigeon />
            <span className="ml-2">Contact Us</span>
          </h2>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
              <input
                className="w-full rounded-lg p-3 pl-10 text-sm border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-400"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email Input */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                <input
                  className="w-full rounded-lg p-3 pl-10 text-sm border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-400"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                <input
                  className="w-full rounded-lg p-3 pl-10 text-sm border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-400"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <textarea
                className="w-full rounded-lg p-3 text-sm border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-400"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center p-5 text-lg font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
