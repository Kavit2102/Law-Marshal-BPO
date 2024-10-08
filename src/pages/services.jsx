import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PhoneCall,
  Search,
  Phone,
  Handshake,
  Scale,
  Book,
  Server,
  ChevronDown,
  Shield,
  CheckCircle,
} from "lucide-react";

const ServicesPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const services = [
    {
      icon: PhoneCall,
      title: "Debt Recovery",
      description:
        "We specialize in recovering overdue debts from individuals and businesses. Using advanced techniques and negotiation strategies, we ensure timely payments for our clients.",
    },
    {
      icon: Search,
      title: "Skip Tracing",
      description:
        "Our skip tracing services help locate debtors who have moved or changed their contact information, ensuring no debt is left uncollected.",
    },
    {
      icon: Phone,
      title: "Outbound Calls",
      description:
        "We engage in outbound calling to remind debtors of their payments, discuss settlement options, and provide customer support.",
    },
    {
      icon: Handshake,
      title: "Payment Negotiation",
      description:
        "Our trained professionals are skilled in negotiating payment plans and settlements on behalf of our clients to ensure smooth debt resolution.",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description:
        "We work with a network of legal professionals to initiate legal proceedings when necessary, ensuring compliance and swift debt recovery.",
    },
    {
      icon: Book,
      title: "Debtor Education",
      description:
        "We provide educational resources and guidance to debtors, helping them understand their financial responsibilities and improve debt management.",
    },
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
        type: "spring",
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
              <a href="#" className="text-xl font-bold">
                Law Marshal BPO
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#services"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
                >
                  Services
                </a>
                <a
                  href="#technology"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
                >
                  Technology
                </a>
                <a
                  href="#contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
{/* Hero Section */}
<section className="relative py-32 px-6 md:px-12 overflow-hidden min-h-screen">
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>

    {/* Subtle radial gradient overlay */}
    <div className="absolute inset-0 bg-radial-at-t from-blue-500/20 via-transparent to-transparent opacity-40"></div>

    {/* Decorative subtle shapes */}
    <div className="absolute top-20 left-10 w-48 h-48 bg-blue-600 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>
    <div className="absolute bottom-32 right-16 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-bold mb-6 text-white"
    >
      Our Services
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white"
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
      <section id="services" className="relative py-20 px-6 md:px-12 bg-gray-900 text-white">
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

    {/* Vertical Scrolling Section */}
    <div className="space-y-16">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left-to-right or right-to-left animation
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}
        >
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <service.icon className="text-blue-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={service.image} // Ensure each service has an image
              alt={service.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Technology and Compliance Section */}
      <section
        id="technology"
        className="py-20 px-6 md:px-12 relative overflow-hidden"
      >
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
              <p className="text-xl text-justify mb-6">
                We leverage advanced technology, including automated dialing
                systems and secure CRM software, to optimize efficiency and
                performance. Compliance is our top priority, and we strictly
                follow regulatory guidelines to ensure ethical debt collection
                practices.
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
              <img
                src="/api/placeholder/600/400"
                alt="Technology"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-purple-600"
      >
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
            Get in touch with us today to explore how our services can drive
            growth and efficiency for your business.
          </motion.p>
           <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-semibold"
          >
            Contact Us
          </motion.button>
          </Link>
        </div>
      </section>

     

          {/* <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Natural Language Generation (NLG):
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width={646}
                    height={485}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

      
  );
};

export default ServicesPage;
