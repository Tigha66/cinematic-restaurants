import React from "react";
import UpgradeModal from "./UpgradeModal";

const PremiumFeatureGate = ({ user, children, showModal = true }) => {
  // Check if user has Pro subscription or active trial
  const isPro = user?.subscriptionTier === "pro" || user?.isTrialActive;

  // If user has Pro access, render children
  if (isPro) {
    return <>{children}</>;
  }

  // Otherwise, show upgrade prompt or modal
  if (showModal) {
    return <UpgradeModal user={user} />;
  }

  // Compact locked state for inline use
  return (
    <div className="relative">
      <div className="opacity-50 pointer-events-none blur-sm">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-900">Pro Feature</p>
          <p className="text-xs text-gray-500 mt-1">Upgrade to unlock</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatureGate;
