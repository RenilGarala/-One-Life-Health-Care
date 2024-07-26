import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition duration-300">About us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Refund Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Support</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-12">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="leading-relaxed">11th floor, Brigade Signature Towers, Kattamnallur, Bangalore 560049</p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-6">
              <li><a href="https://www.facebook.com" target="_blank"  className="hover:text-gray-400 transition duration-300"><FaFacebook size={24} /></a></li>
              <li><a href="https://www.twitter.com" target="_blank"  className="hover:text-gray-400 transition duration-300"><FaTwitter size={24} /></a></li>
              <li><a href="https://www.linkedin.com" target="_blank"  className="hover:text-gray-400 transition duration-300"><FaLinkedin size={24} /></a></li>
              <li><a href="https://www.instagram.com" target="_blank"  className="hover:text-gray-400 transition duration-300"><FaInstagram size={24} /></a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Join Our Wellness Newsletter</h2>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 mb-2 bg-green-800 text-white border border-white rounded"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-green-600 bg-gray-200 hover:bg-gray-300 transition duration-300 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <p>© Fly Fare Technologies LLP 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
