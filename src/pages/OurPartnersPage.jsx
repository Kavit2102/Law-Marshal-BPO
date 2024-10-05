import React, { useState, useEffect } from 'react';
import { ArrowRight, Users } from 'lucide-react';

const OurPartnersPage = () => {
  const [visiblePartners, setVisiblePartners] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const partnersSection = document.getElementById('partners-showcase');
      if (partnersSection) {
        const sectionTop = partnersSection.offsetTop;
        const sectionHeight = partnersSection.offsetHeight;
        const visibleCount = Math.min(
          6,
          Math.ceil(((scrollPosition + windowHeight - sectionTop) / sectionHeight) * 6)
        );
        setVisiblePartners(visibleCount);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    {
      name: 'Partner 1',
      description: 'Partner 1 is a leader in financial solutions, providing expertise that enhances our service delivery.',
    },
    {
      name: 'Partner 2',
      description: 'Partner 2 offers cutting-edge technology solutions that streamline our operations and improve efficiency.',
    },
    {
      name: 'Partner 3',
      description: 'Partner 3 specializes in compliance management, ensuring we adhere to regulatory standards.',
    },
    {
      name: 'Partner 4',
      description: 'Partner 4 provides exceptional training and development resources for our team.',
    },
    {
      name: 'Partner 5',
      description: 'Partner 5 is a renowned marketing firm that helps us reach our target audience effectively.',
    },
    {
      name: 'Partner 6',
      description: 'Partner 6 collaborates with us on community initiatives, promoting social responsibility.',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Sticky Header */}
      <header className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white">Law Marshal BPO</div>
            <div className="flex space-x-4">
              <a href="#intro" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Home</a>
              <a href="#partners-showcase" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Partners</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Introduction Section */}
      <section id="intro" className="pt-24 pb-16 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">Why Partnerships Matter</h1>
              <p className="text-xl mb-6 animate__animated animate__fadeInUp">
                At Law Marshal BPO, we believe that collaboration is key to delivering exceptional service. Our partners share our commitment to excellence, innovation, and customer satisfaction.
              </p>
              <a href="#partners-showcase" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
                Explore Our Partners
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/api/placeholder/400/300" alt="Collaboration" className="rounded-lg shadow-lg animate__animated animate__zoomIn" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase Section */}
      <section id="partners-showcase" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Trusted Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 ${
                  index < visiblePartners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <img src={`/api/placeholder/150/100`} alt={partner.name} className="w-32 h-32 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold text-center mb-2 text-white">{partner.name}</h3>
                <p className="text-gray-300 text-center">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">Join Us in Building Stronger Solutions</h2>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp">
            If you're interested in becoming a partner or learning more about our collaborative efforts, we'd love to hear from you!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurPartnersPage;
