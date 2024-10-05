import React from 'react';
import { ChevronDown, Users, TrendingUp, Target } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Sticky Header */}
      <header className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-500">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-4xl font-extrabold text-purple-400">Law Marshal BPO Careers</h1>
        </div>
      </header>

      {/* Company Culture Section */}
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-white animate__animated animate__zoomIn">Why Work With Us?</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Law Marshal BPO, we believe that our employees are our greatest asset. We foster a collaborative, inclusive, and innovative environment where everyone can thrive.
              </p>
              <div className="flex justify-center mt-8 space-x-8">
                <Users className="w-20 h-20 text-purple-500 hover:text-purple-400 transition-transform duration-300 hover:scale-110 transform" />
                <TrendingUp className="w-20 h-20 text-purple-500 hover:text-purple-400 transition-transform duration-300 hover:scale-110 transform" />
                <Target className="w-20 h-20 text-purple-500 hover:text-purple-400 transition-transform duration-300 hover:scale-110 transform" />
              </div>
            </div>
            <div className="md:w-1/2 animate__animated animate__fadeInRight">
              <img src="/api/placeholder/600/400" alt="Team building" className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 transform hover:shadow-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Message Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-purple-400 animate__animated animate__bounceIn">Join Our Team</h2>
          <p className="text-center mb-8 text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            We hire for various positions across different departments. If interested, please email your resume with a cover letter at
            <a href="mailto:careers@lawmarshalbpo.com" className="text-purple-500 hover:underline"> careers@lawmarshalbpo.com</a>.
          </p>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-white">What Our Employees Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Testimonial Card */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="/api/placeholder/100/100" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 mb-4 italic">"Law Marshal BPO has given me the opportunity to grow my career while being part of a supportive team."</p>
              <p className="font-semibold text-purple-400">John Doe</p>
              <p className="text-sm text-gray-500">Debt Recovery Specialist</p>
            </div>

            {/* Second Testimonial Card */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="/api/placeholder/100/100" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 mb-4 italic">"The collaborative environment makes coming to work enjoyable and fulfilling."</p>
              <p className="font-semibold text-purple-400">Jane Smith</p>
              <p className="text-sm text-gray-500">Customer Service Representative</p>
            </div>

            {/* Third Testimonial Card */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="/api/placeholder/100/100" alt="Alex Brown" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 mb-4 italic">"I appreciate the training and development opportunities provided by the company."</p>
              <p className="font-semibold text-purple-400">Alex Brown</p>
              <p className="text-sm text-gray-500">Data Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-purple-700 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center text-white mb-8 animate__animated animate__fadeIn">Ready to Start Your Career with Us?</h2>
          <p className="text-2xl text-center text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">Email us your resume to take the next step in your career.</p>
        </div>
        <div className="absolute inset-0 opacity-20 animate__animated animate__fadeIn animate__delay-2s">
          <img src="/api/placeholder/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Smooth Scroll Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-2xl hover:bg-purple-700 transition-colors duration-300 animate__animated animate__fadeIn"
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </button>
    </div>
  );
};

export default CareersPage;
