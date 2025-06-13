import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get cart data from state passed via Link
  const cart = location.state?.cart || [];

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // Simulated payment handler
  const handlePayment = () => {
    alert('Payment successful! Thank you for your purchase.');
    navigate('/'); // Redirect to homepage after payment
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Go back to add items.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Total Price */}
          <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Total Amount</h2>
            <p className="text-lg font-bold text-green-600">${calculateTotal()}</p>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg w-full"
          >
            Make Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
