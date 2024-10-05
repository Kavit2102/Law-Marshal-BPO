import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#030c22] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          <div className="col-span-1 md:col-span-2">
            <p className="mb-4 text-left">
              We are here to dispel the notion that collections are the dark
              underbelly of the financial ecosystem. Technology meets empathy in
              our process to craft digital debt resolution strategies that help
              your customers complete their debt obligations fearlessly and
              improve long-term relationships.
            </p>
          </div>
          <div className="flex justify-end items-start">
            <button className="bg-white text-black text-navy-900 py-2 px-4 rounded-full flex items-center">
              <MessageCircle size={20} className="mr-2" />
              Let's talk
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mb-12 text-left">
          <div>
            <h3 className="text-blue-400 mb-8">Our Location</h3>
            <p className="text-sm mb-2">
              Unit A, 6th Floor, Technoples I, Technoples Complex opp Veer
              Savarkar Flyover,
            </p>
            <p className="text-sm mb-2">
              Goregaon Mumbai City Maharashtra 400062, India
            </p>
            <p className="text-sm mb-2">Credavenue Spocto Technology Limited</p>
            <p className="text-sm mb-2">
              Unit 1102 Index Tower, DIFC, Dubai, UAE
            </p>
            <p className="text-sm">
              Wholly owned subsidiary of Spocto Solutions India Pvt. Ltd.
            </p>
          </div>
          <div>
            <h3 className="text-blue-400 mb-8">Contact us</h3>
            <p className="text-sm mb-2">+91 22 20684445</p>
            <p className="text-sm">+971 (04) 234 5613</p>
          </div>
          <div>
            <h3 className="text-blue-400 mb-8">Email us</h3>
            <p className="text-sm mb-2">hello@spocto.com</p>
            <p className="text-xs">(Only for marketing-related enquiries)</p>
            <p className="text-sm">marhtab@spocto.com</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-blue-400 mb-8">Products and Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Link to="/">
                <p className="text-sm mb-2">Connect</p>
              </Link>
              <Link to="/">
                <p className="text-sm mb-2">Smart Settle</p>
              </Link>
              <Link to="/">
                <p className="text-sm">Recommendation Guru</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p className="text-sm mb-2">Smart Legal</p>
              </Link>
              <Link to="/">
                <p className="text-sm mb-2">Field Plus</p>
              </Link>
              <Link to="/">
                <p className="text-sm">Bhaasa</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p className="text-sm mb-2">Pay Dues</p>
              </Link>
              <Link to="/">
                <p className="text-sm mb-2">Call Plus</p>
              </Link>
              <Link to="/">
                <p className="text-sm">spocto Score</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p className="text-sm mb-2">Vigil</p>
              </Link>
              <Link to="/">
                <p className="text-sm">Smart Collect</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex space-x-4 mb-8 md:mb-0">
            <a href="#" className="text-white hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex flex-wrap space-x-4 text-xs">
            <a href="#" className="hover:text-blue-400">
              Legal & Compliance
            </a>
            <a href="#" className="hover:text-blue-400">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400">
              Grievance Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              CSR Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              CSR Committee
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Use
            </a>
          </div>
        </div>

        <div className="text-center text-xs">
          <p className="mb-2">
            <a href="#" className="hover:text-blue-400">
              Disclaimer Support Annual Return 2023
            </a>{" "}
            |
            <a href="#" className="hover:text-blue-400">
              Annual Return 2022
            </a>{" "}
            |
            <a href="#" className="hover:text-blue-400">
              Annual Return 2021
            </a>{" "}
            |
            <a href="#" className="hover:text-blue-400">
              Annual Return 2020
            </a>
          </p>
          <p>
            All Rights Reserved spocto 2023 for grievances:
            grievancesofficer@spocto.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
