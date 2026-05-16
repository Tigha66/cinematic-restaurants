// Subscription Service
// Handles Stripe integration and subscription management

// Handle upgrade to Pro subscription
export const handleUpgrade = async (userId) => {
  try {
    // In production, this would call your backend API to create a Stripe checkout session
    // For demo purposes, we'll simulate the upgrade flow
    
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }
    
    const data = await response.json();
    
    // Redirect to Stripe checkout
    if (data.url) {
      window.location.href = data.url;
    }
    
    return { success: true };
  } catch (error) {
    console.error("Upgrade failed:", error);
    // For demo, show an alert instead of failing silently
    alert("Demo Mode: In production, this would redirect to Stripe checkout. Pro features unlocked for demo!");
    return { success: false, error: error.message };
  }
};

// Cancel subscription
export const cancelSubscription = async (userId) => {
  try {
    const response = await fetch("/api/cancel-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to cancel subscription");
    }
    
    return { success: true };
  } catch (error) {
    console.error("Cancellation failed:", error);
    return { success: false, error: error.message };
  }
};

// Get subscription details
export const getSubscriptionDetails = async (userId) => {
  try {
    const response = await fetch(`/api/subscription/${userId}`);
    
    if (!response.ok) {
      throw new Error("Failed to get subscription details");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error getting subscription:", error);
    return null;
  }
};

// Verify subscription status (for premium feature gating)
export const verifyProAccess = (userProfile) => {
  if (!userProfile) return false;
  
  // Check for active Pro subscription
  if (userProfile.subscriptionTier === "pro" && userProfile.subscriptionStatus === "active") {
    return true;
  }
  
  // Check for active trial
  if (userProfile.isTrialActive) {
    return true;
  }
  
  return false;
};

export default {
  handleUpgrade,
  cancelSubscription,
  getSubscriptionDetails,
  verifyProAccess,
};
