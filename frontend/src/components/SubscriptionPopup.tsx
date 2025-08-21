import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SubscriptionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem('subscriptionPopupShown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          localStorage.setItem('subscriptionPopupShown', 'true');
          setIsVisible(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem('subscriptionPopupShown', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative p-8 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">💪 FUEL YOUR PASSION</h2>
            <p className="text-lg opacity-90 font-medium">Join O2 Nutrition family! Get exclusive supplement deals, fitness tips & expert guidance!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Enter your phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F9A245] hover:bg-[#E86A12] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Joining O2 Family...' : '🏆 JOIN O2 NUTRITION'}
            </button>
            {showSuccess && (
              <div className="mt-4 p-3 bg-[#40B75D] text-white rounded-lg text-center font-semibold">
                ✅ Welcome to O2 Nutrition! Get ready for exclusive supplement deals!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup;