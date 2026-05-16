// User Service
// Handles user profile management, trial periods, and subscription status

import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Start free trial for a new user
export const startFreeTrial = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      subscriptionTier: "free",
      freeTrialStart: new Date(),
      freeTrialDays: 7,
      createdAt: new Date(),
    }, { merge: true });
    return { success: true };
  } catch (error) {
    console.error("Error starting free trial:", error);
    return { success: false, error: error.message };
  }
};

// Check if trial is active
export const isTrialActive = (user) => {
  if (!user?.freeTrialStart) return false;
  
  const start = user.freeTrialStart.toDate 
    ? user.freeTrialStart.toDate() 
    : new Date(user.freeTrialStart);
  const now = new Date();
  const daysPassed = (now - start) / (1000 * 60 * 60 * 24);
  
  return daysPassed < (user.freeTrialDays || 7);
};

// Get days remaining in trial
export const getTrialDaysRemaining = (user) => {
  if (!user?.freeTrialStart) return 0;
  
  const start = user.freeTrialStart.toDate 
    ? user.freeTrialStart.toDate() 
    : new Date(user.freeTrialStart);
  const now = new Date();
  const daysPassed = (now - start) / (1000 * 60 * 60 * 24);
  const daysRemaining = (user.freeTrialDays || 7) - daysPassed;
  
  return Math.max(0, Math.ceil(daysRemaining));
};

// Update user profile
export const updateUserProfile = async (userId, profileData) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      profile: profileData,
      updatedAt: new Date(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, error: error.message };
  }
};

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() };
    }
    return { success: false, error: "User not found" };
  } catch (error) {
    console.error("Error getting profile:", error);
    return { success: false, error: error.message };
  }
};

// Check subscription status
export const checkSubscriptionStatus = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      return {
        tier: data.subscriptionTier || "free",
        status: data.subscriptionStatus || null,
        isTrialActive: isTrialActive(data),
        trialDaysRemaining: getTrialDaysRemaining(data),
      };
    }
    return { tier: "free", status: null, isTrialActive: false, trialDaysRemaining: 0 };
  } catch (error) {
    console.error("Error checking subscription:", error);
    return { tier: "free", status: null, isTrialActive: false, trialDaysRemaining: 0 };
  }
};

export default {
  startFreeTrial,
  isTrialActive,
  getTrialDaysRemaining,
  updateUserProfile,
  getUserProfile,
  checkSubscriptionStatus,
};
