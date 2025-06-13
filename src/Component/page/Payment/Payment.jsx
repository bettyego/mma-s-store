import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Replace with your Stripe public key
const stripePromise = loadStripe('your-publishable-key-here');

function Payment() {
  const handleCheckout = async () => {
    try {
      // Make a request to the backend to create a Stripe Checkout session
      const response = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: [{ id: 'product_id_1', quantity: 1 }] }), // Replace with cart data
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-gray-600 mb-4">Please confirm your payment.</p>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
