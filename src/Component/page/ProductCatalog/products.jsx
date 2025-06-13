import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]); // Cart state

  useEffect(() => {
    // Simulate fetching products from an API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products'); // Placeholder API
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Add to cart function
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Decrease quantity function
  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      {/* <div id="google_translate_element" className='block bg-red-600 z-10'>
        <div id=":0.targetLanguage">
        </div>
      </div> */}
      {/* Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Our Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>

            <button 
              onClick={() => addToCart(product)} // Add to cart functionality
              className="bg-pink-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/checkout"
              state={{ cart }} // Pass cart data using state
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
            >
              View your carts
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
