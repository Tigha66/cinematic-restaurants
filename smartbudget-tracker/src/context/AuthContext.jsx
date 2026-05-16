import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// Create the context
export const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from Firestore
  const fetchUserProfile = async (user) => {
    if (!user) {
      setUserProfile(null);
      return null;
    }

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const profile = userSnap.data();
        setUserProfile({
          ...profile,
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || profile?.profile?.name || "User",
          photoURL: user.photoURL || profile?.profile?.photoURL,
        });
        return profile;
      } else {
        // Create default profile for new users
        const defaultProfile = {
          subscriptionTier: "free",
          subscriptionStatus: null,
          freeTrialStart: null,
          freeTrialDays: 7,
          isTrialActive: false,
        };
        setUserProfile({
          ...defaultProfile,
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "User",
          photoURL: user.photoURL,
        });
        return defaultProfile;
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // Return default profile on error
      setUserProfile({
        subscriptionTier: "free",
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "User",
        photoURL: user.photoURL,
      });
      return null;
    }
  };

  // Check if user has pro subscription
  const isPro = () => {
    if (!userProfile) return false;
    return userProfile.subscriptionTier === "pro" || userProfile.isTrialActive;
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Refresh user profile
  const refreshProfile = async () => {
    if (currentUser) {
      await fetchUserProfile(currentUser);
    }
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    isPro,
    refreshProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
