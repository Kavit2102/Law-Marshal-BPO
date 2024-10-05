import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneCall, Search, Phone, Handshake, Scale, Book, Server, ChevronDown, Shield, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    { icon: PhoneCall, title: 'Debt Recovery', description: 'We specialize in recovering overdue debts from individuals and businesses. Using advanced techniques and negotiation strategies, we ensure timely payments for our clients.' },
    { icon: Search, title: 'Skip Tracing', description: 'Our skip tracing services help locate debtors who have moved or changed their contact information, ensuring no debt is left uncollected.' },
    { icon: Phone, title: 'Outbound Calls', description: 'We engage in outbound calling to remind debtors of their payments, discuss settlement options, and provide customer support.' },
    { icon: Handshake, title: 'Payment Negotiation', description: 'Our trained professionals are skilled in negotiating payment plans and settlements on behalf of our clients to ensure smooth debt resolution.' },
    { icon: Scale, title: 'Legal Services', description: 'We work with a network of legal professionals to initiate legal proceedings when necessary, ensuring compliance and swift debt recovery.' },
    { icon: Book, title: 'Debtor Education', description: 'We provide educational resources and guidance to debtors, helping them understand their financial responsibilities and improve debt management.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-opacity-90 bg-gray-900 backdrop-filter backdrop-blur-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold">Law Marshal BPO</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Services</a>
                <a href="#technology" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Technology</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl"
          >
            Innovative debt collection solutions tailored for your business success
          </motion.p>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Explore Our Services
            <ChevronDown className="ml-2" size={20} />
          </motion.a>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 text-center max-w-3xl mx-auto"
          >
            At Law Marshal BPO, we offer a wide range of business process outsourcing solutions to help your organization operate more efficiently. Our team of experts provides end-to-end services across multiple sectors, ensuring optimal performance and customer satisfaction.
          </motion.p>

          {/* Services Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <service.icon className="text-blue-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology and Compliance Section */}
      <section id="technology" className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Technology & Compliance
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl mb-6">
                We leverage advanced technology, including automated dialing systems and secure CRM software, to optimize efficiency and performance. Compliance is our top priority, and we strictly follow regulatory guidelines to ensure ethical debt collection practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Server className="text-blue-400 mr-4" size={24} />
                  <span>State-of-the-art infrastructure</span>
                </li>
                <li className="flex items-center">
                  <Shield className="text-blue-400 mr-4" size={24} />
                  <span>Robust data security measures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-400 mr-4" size={24} />
                  <span>Adherence to industry regulations</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img src="/api/placeholder/600/400" alt="Technology" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Looking for a Reliable BPO Partner?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Get in touch with us today to explore how our services can drive growth and efficiency for your business.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-semibold"
          >
            Contact Us
          </motion.button>
          
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;