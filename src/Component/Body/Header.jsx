import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-pink-500 tracking-wider">
          Mma's Store
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/products" className="hover:text-pink-500 transition">Products</Link>
          <Link to="/carts" className="hover:text-pink-500 transition">Cart</Link>
          <Link to="/payment" className="hover:text-pink-500 transition">Payment</Link>
          <Link to="/login" className="hover:text-pink-500 transition">Login/Register</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/products"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2">
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-400">Products</Link>
          <Link to="/carts" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-400">Cart</Link>
          <Link to="/payment" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-400">Payment</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-400">Login/Register</Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="block mt-2 bg-pink-600 text-white text-center px-4 py-2 rounded-full hover:bg-pink-700"
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
