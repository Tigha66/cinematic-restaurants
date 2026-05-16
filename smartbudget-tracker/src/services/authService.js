// Authentication Service
// Handles user sign up, login, logout, and Google authentication

import { auth, googleProvider } from "../firebase/firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import { startFreeTrial } from "./userService";

// Sign up with email and password
export const signUp = async (email, password, displayName = null) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name if provided
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }
    
    // Start free trial for new users
    await startFreeTrial(result.user.uid);
    
    return { success: true, user: result.user };
  } catch (error) {
    console.error("Sign up error:", error);
    return { success: false, error: getAuthErrorMessage(error.code) };
  }
};

// Login with email and password
export const login = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: result.user };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: getAuthErrorMessage(error.code) };
  }
};

// Login with Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    
    // Check if this is a new user and start trial
    if (result._tokenResponse?.isNewUser) {
      await startFreeTrial(result.user.uid);
    }
    
    return { success: true, user: result.user };
  } catch (error) {
    console.error("Google login error:", error);
    return { success: false, error: getAuthErrorMessage(error.code) };
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: error.message };
  }
};

// Send password reset email
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error("Password reset error:", error);
    return { success: false, error: getAuthErrorMessage(error.code) };
  }
};

// Get user-friendly error messages
const getAuthErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/email-already-in-use": "This email is already registered. Please login instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/operation-not-allowed": "This login method is not enabled. Please contact support.",
    "auth/weak-password": "Password should be at least 6 characters long.",
    "auth/user-disabled": "This account has been disabled. Please contact support.",
    "auth/user-not-found": "No account found with this email. Please sign up.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Invalid credentials. Please check your email and password.",
    "auth/too-many-requests": "Too many failed attempts. Please try again later.",
    "auth/popup-closed-by-user": "Login popup was closed. Please try again.",
    "auth/network-request-failed": "Network error. Please check your connection.",
  };
  
  return errorMessages[errorCode] || "An error occurred. Please try again.";
};

export default {
  signUp,
  login,
  loginWithGoogle,
  logout,
  resetPassword,
};
