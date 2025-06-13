import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-pink-500 text-black pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            Mma’s Store is your destination for stylish, high-quality fashion pieces—affordable and always on trend.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/login" className="hover:text-white">Login/Register</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-2">Get updates on new arrivals & exclusive offers:</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none w-full"
            />
            <button className="bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded-r transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="space-y-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white">
              <i className="fab fa-facebook-f"></i><span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white">
              <i className="fab fa-twitter"></i><span>Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white">
              <i className="fab fa-instagram"></i><span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white mt-10 text-sm">
        © {new Date().getFullYear()} Mma’s Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
