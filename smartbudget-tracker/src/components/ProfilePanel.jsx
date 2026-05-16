import React from "react";
import { useAuth } from "../context/AuthContext";
import { logout } from "../services/authService";
import { getTrialDaysRemaining } from "../services/userService";

const ProfilePanel = ({ onClose }) => {
  const { currentUser, userProfile } = useAuth();

  const handleLogout = async () => {
    await logout();
    if (onClose) onClose();
  };

  const isPro = userProfile?.subscriptionTier === "pro";
  const isTrialActive = userProfile?.isTrialActive;
  const trialDaysRemaining = getTrialDaysRemaining(userProfile);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideUp">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || "U"}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {userProfile?.displayName || currentUser?.displayName || "User"}
          </h3>
          <p className="text-sm text-gray-500">{currentUser?.email}</p>
          <div className="flex items-center gap-2 mt-1">
            {isPro ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                PRO Member
              </span>
            ) : isTrialActive ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                🎁 Trial: {trialDaysRemaining} days left
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                Free Plan
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-xs text-gray-500">Transactions</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <p className="text-2xl font-bold text-emerald-600">$5.4k</p>
          <p className="text-xs text-gray-500">Income</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <p className="text-2xl font-bold text-red-500">$1.5k</p>
          <p className="text-xs text-gray-500">Expenses</p>
        </div>
      </div>

      {/* Subscription Section */}
      {!isPro && (
        <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
              ⭐
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Upgrade to Pro</h4>
              <p className="text-sm text-purple-100">
                Unlock AI insights & budget goals
              </p>
            </div>
            <button className="px-4 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">
              $7/mo
            </button>
          </div>
        </div>
      )}

      {/* Menu Options */}
      <div className="space-y-2">
        <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Edit Profile</p>
            <p className="text-sm text-gray-500">Update your information</p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Settings</p>
            <p className="text-sm text-gray-500">App preferences</p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Help & Support</p>
            <p className="text-sm text-gray-500">FAQs and contact</p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 rounded-xl transition-colors mt-4"
        >
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-red-600">Log Out</p>
            <p className="text-sm text-gray-500">Sign out of your account</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProfilePanel;
