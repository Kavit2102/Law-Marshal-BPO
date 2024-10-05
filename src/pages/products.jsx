import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Footer from '../components/home/footer';

const ProductCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 font-semibold flex items-center group">
      Learn More
      <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  </div>
);

const Products = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* Products Overview Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-900">Our Product Offerings</h1>
          <p className="text-lg text-gray-700">
            At Law Marshal BPO, we provide a range of innovative products designed to enhance the efficiency of debt recovery and customer service processes. Our technology-driven solutions are crafted to meet the diverse needs of our clients.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Collections as a Service"
            description="Our end-to-end collections activity optimizes technology and manual intervention for higher recovery rates."
            icon={(props) => <img src="/api/placeholder/50/50" alt="Collections" {...props} />}
          />
          <ProductCard
            title="Automated Customer Service"
            description="Quick, friendly automated solutions to enhance customer relationships."
            icon={(props) => <img src="/api/placeholder/50/50" alt="Customer Service" {...props} />}
          />
          <ProductCard
            title="Debt Recovery Solutions"
            description="Advanced solutions leveraging technology for effective communication and collections."
            icon={(props) => <img src="/api/placeholder/50/50" alt="Debt Recovery" {...props} />}
          />
          <ProductCard
            title="Payment Processing Systems"
            description="Secure systems to facilitate smooth transactions."
            icon={(props) => <img src="/api/placeholder/50/50" alt="Payment Processing" {...props} />}
          />
          <ProductCard
            title="Compliance Management Tools"
            description="Tools to help organizations maintain compliance in debt collection."
            icon={(props) => <img src="/api/placeholder/50/50" alt="Compliance" {...props} />}
          />
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4 md:px-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Our Technology Stack</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We use cutting-edge technology including automated dialing systems and advanced CRM software.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img src="/api/placeholder/800/400" alt="Technology Stack" className="w-full h-auto mb-6 rounded" />
            <div className="flex justify-center space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`/api/placeholder/50/50`} alt={`Tech ${i}`} className="w-12 h-12" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Operations?</h2>
          <p className="text-xl mb-8">
            Explore our products and discover how we can help your organization thrive.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
