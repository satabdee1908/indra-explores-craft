
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-turmeric">Suryo</span>
              <span className="ml-1 text-2xl font-bold text-white">dayaa</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Connecting artisans with the world, sharing stories through crafts and travel.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=handicrafts" className="text-gray-300 hover:text-white transition-colors">Handicrafts</Link></li>
              <li><Link to="/products?category=textiles" className="text-gray-300 hover:text-white transition-colors">Textiles</Link></li>
              <li><Link to="/products?category=home-decor" className="text-gray-300 hover:text-white transition-colors">Home Decor</Link></li>
              <li><Link to="/artisans" className="text-gray-300 hover:text-white transition-colors">Artisans</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Travel</h3>
            <ul className="space-y-2">
              <li><Link to="/travel" className="text-gray-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link to="/travel/custom" className="text-gray-300 hover:text-white transition-colors">Custom Tours</Link></li>
              <li><Link to="/travel/guides" className="text-gray-300 hover:text-white transition-colors">Local Guides</Link></li>
              <li><Link to="/travel/odisha" className="text-gray-300 hover:text-white transition-colors">Discover Odisha</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Suryodayaa. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">Made with ❤️ for Indian artisans</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
