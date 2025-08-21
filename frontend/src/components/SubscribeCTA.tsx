import React, { useState } from 'react';

interface SubscribeCTAProps {
  variant?: 'banner' | 'inline' | 'sidebar';
  title?: string;
  description?: string;
}

const SubscribeCTA: React.FC<SubscribeCTAProps> = ({ 
  variant = 'inline',
  title = "Join O2 Nutrition Family!",
  description = "Get exclusive deals & fitness tips"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'banner') {
    return (
      <div className="bg-transparent sm:bg-gradient-to-r sm:from-[#F9A245] sm:to-[#E86A12] text-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-black text-base focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-[#F9A245] px-0 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 whitespace-nowrap flex items-center justify-center min-w-[48px] sm:min-w-auto"
          >
            <span className="sm:hidden">
              {isSubmitting ? '...' : '→'}
            </span>
            <span className="hidden sm:inline">
              {isSubmitting ? 'Joining...' : 'JOIN NOW'}
            </span>
          </button>
        </form>
        {showSuccess && (
          <div className="mt-3 text-center text-sm">✅ Subscribed successfully!</div>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#F9A245]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F9A245] text-white py-2 rounded hover:bg-[#E86A12] disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {showSuccess && (
          <div className="mt-2 text-center text-sm text-green-600">✅ Subscribed!</div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#F9A245] p-4 rounded-lg">
      <div className="text-center mb-3">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-3 py-2 border rounded focus:ring-2 focus:ring-[#F9A245]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#F9A245] text-white px-4 py-2 rounded hover:bg-[#E86A12] disabled:opacity-50"
        >
          {isSubmitting ? '...' : 'Join'}
        </button>
      </form>
      {showSuccess && (
        <div className="mt-2 text-center text-sm text-green-600">✅ Subscribed!</div>
      )}
    </div>
  );
};

export default SubscribeCTA;