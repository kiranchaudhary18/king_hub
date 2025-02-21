import React from 'react';
import {
  FaInstagram, // Instagram icon
  FaFacebook,  // Facebook icon
  FaLinkedin,  // LinkedIn icon
  FaTwitter,   // Twitter icon
} from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                The best food delivery service in your city. Order now and enjoy delicious meals from your favorite restaurants.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/restaurants" className="text-sm text-gray-400 hover:text-white transition">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="/promotions" className="text-sm text-gray-400 hover:text-white transition">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="/popular-food" className="text-sm text-gray-400 hover:text-white transition">
                    Popular Food
                  </a>
                </li>
                <li>
                  <a href="/help-center" className="text-sm text-gray-400 hover:text-white transition">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact-us" className="text-sm text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">123 Food Street, City, Country</p>
              <p className="text-sm text-gray-400">+1 234 567 890</p>
              <p className="text-sm text-gray-400">
                <a href="mailto:support@kinghub.com" className="hover:text-white transition">
                  support@kinghub.com
                </a>
              </p>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram size={24} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebook size={24} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedin size={24} />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            © 2025 KingHub. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;