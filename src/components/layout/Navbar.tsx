
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/5671dd79-f619-459f-bfe8-929751dda445.png" 
                alt="Suryodayaa Logo" 
                className="h-12 w-auto mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-terracotta transition-colors">
              Shop
            </Link>
            <Link to="/travel" className="text-gray-700 hover:text-terracotta transition-colors">
              Travel
            </Link>
            <Link to="/ai-assistant" className="text-gray-700 hover:text-terracotta transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              AI Assistant
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-terracotta transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-terracotta transition-colors">
              Contact
            </Link>
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/products" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/travel" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel
            </Link>
            <Link 
              to="/ai-assistant" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="h-4 w-4" />
              AI Assistant
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
