import React, { useState } from "react";
import { handleUpgrade } from "../services/subscriptionService";

const UpgradeModal = ({ user, onClose, inline = false }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgradeClick = async () => {
    setIsLoading(true);
    try {
      await handleUpgrade(user?.uid);
    } catch (error) {
      console.error("Upgrade error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: "🎯",
      title: "Budget Goals",
      description: "Set and track spending limits per category",
    },
    {
      icon: "🤖",
      title: "AI Suggestions",
      description: "Personalized tips to save money",
    },
    {
      icon: "📱",
      title: "Multi-Device Sync",
      description: "Access from any device, anywhere",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Detailed spending reports and trends",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Notifications when approaching limits",
    },
    {
      icon: "🚫",
      title: "Ad-Free Experience",
      description: "No interruptions, ever",
    },
  ];

  const content = (
    <div className={inline ? "" : "max-w-md mx-auto"}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
          ⭐
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Upgrade to Pro</h2>
        <p className="text-gray-500 mt-2">
          Unlock powerful features to supercharge your budgeting
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold text-gray-900">$7</span>
          <div className="text-left">
            <p className="text-sm text-gray-500">per month</p>
            <p className="text-xs text-emerald-600 font-medium">Save 30% with annual</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          7-day free trial included
        </p>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
          >
            <span className="text-2xl">{feature.icon}</span>
            <div>
              <p className="font-medium text-gray-900">{feature.title}</p>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleUpgradeClick}
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-xl"
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          "Start Free Trial"
        )}
      </button>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-4 mt-4 text-gray-400">
        <div className="flex items-center gap-1 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Secure
        </div>
        <div className="flex items-center gap-1 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Cancel anytime
        </div>
      </div>

      {/* Skip/Close */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          Maybe later
        </button>
      )}
    </div>
  );

  // Inline mode (embedded in page)
  if (inline) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fadeIn">
        {content}
      </div>
    );
  }

  // Modal mode (overlay)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {content}
      </div>
    </div>
  );
};

export default UpgradeModal;
