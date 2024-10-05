import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Law Marshal</h1>
          <p className="text-xl mb-8">Your trusted partner in innovative debt collection solutions.</p>
          <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Get in touch
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Founded in 2018, Law Marshal has quickly established itself as a leading BPO center in Indore, M.P., India. We specialize in providing comprehensive inbound and outbound call center services, with a focus on sectors such as banking, insurance, telecom, and e-commerce.
              </p>
              <p>
                Our commitment to excellence, coupled with our state-of-the-art infrastructure and highly skilled workforce, has allowed us to deliver exceptional results for our clients consistently.
              </p>
            </div>
            <div>
              <img src="/api/placeholder/600/400" alt="Law Marshal Office" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>We strive for excellence in every interaction, ensuring the highest standards of service for our clients and their customers.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>We conduct our business with the utmost integrity, maintaining ethical standards and building trust with our clients and their customers.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We embrace innovation, continuously improving our processes and leveraging cutting-edge technology to deliver superior results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <img src="/api/placeholder/150/150" alt="Himangi Gandhi" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Himangi Gandhi</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p>MBA in Finance with over 3 years of experience in the financial sector, leading Law Marshal's strategic vision and operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img src="/api/placeholder/150/150" alt="CA. Harsh Vijayvargiya" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">CA. Harsh Vijayvargiya</h3>
              <p className="text-gray-600 mb-4">Legal & Finance Expert</p>
              <p>Chartered Accountant and qualified lawyer, providing expertise in tax, GST, and NCLT matters, enhancing Law Marshal's service offerings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your customer service?</h2>
          <p className="text-xl mb-8">Partner with Law Marshal for innovative and effective BPO solutions.</p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            Contact us today
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;