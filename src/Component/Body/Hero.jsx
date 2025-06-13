import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-gray-900 text-pink-500 py-20 px-6 text-center lg:text-left">
      {/* Hero Content */}
      <div className="container  mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="max-w-2xl  ">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 ">
            Discover Your Style
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            Explore our latest collection of trendy and timeless clothing and footwears for every occasion.
          </p>
          <Link to="/products">
            <button className="bg-pink-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 w-2/4 md:w-3/4  ">
          <img
            src="/pexels-rachel-claire-5531540.jpg"
            alt="Fashionable Clothing"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
