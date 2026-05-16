import React, { useState, useEffect } from "react";
import { groupByCategory, calculateTotals } from "../data/demoExpenses";

const AIExpenseSuggestions = ({ expenses = [] }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      const generatedSuggestions = generateSuggestions(expenses);
      setSuggestions(generatedSuggestions);
      setIsAnalyzing(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [expenses]);

  const generateSuggestions = (expenses) => {
    const categoryData = groupByCategory(expenses);
    const totals = calculateTotals(expenses);
    const suggestions = [];

    // Analyze spending patterns
    Object.entries(categoryData).forEach(([category, data]) => {
      const percentOfTotal = (data.total / totals.expenses) * 100;

      // High entertainment spending
      if (category === "Entertainment" && percentOfTotal > 15) {
        suggestions.push({
          id: 1,
          type: "warning",
          icon: "🎬",
          title: "Entertainment Spending Alert",
          description: `You're spending ${percentOfTotal.toFixed(0)}% on entertainment. Consider setting a monthly limit to save more.`,
          savings: Math.round(data.total * 0.3),
          action: "Set Budget Limit",
        });
      }

      // Food spending optimization
      if (category === "Food" && data.total > 300) {
        suggestions.push({
          id: 2,
          type: "tip",
          icon: "🍔",
          title: "Food Cost Optimization",
          description: "Try meal prepping to reduce food costs. You could save up to 30% on dining expenses.",
          savings: Math.round(data.total * 0.25),
          action: "View Meal Plans",
        });
      }

      // Transport alternatives
      if (category === "Transport" && data.total > 150) {
        suggestions.push({
          id: 3,
          type: "tip",
          icon: "🚗",
          title: "Transport Savings",
          description: "Consider carpooling or public transit for regular commutes to reduce transport costs.",
          savings: Math.round(data.total * 0.2),
          action: "Explore Options",
        });
      }
    });

    // General savings advice
    if (totals.balance < totals.income * 0.2) {
      suggestions.push({
        id: 4,
        type: "insight",
        icon: "💡",
        title: "Savings Rate Improvement",
        description: "Your savings rate is below the recommended 20%. Consider automating savings transfers on payday.",
        savings: null,
        action: "Auto-Save Setup",
      });
    }

    // Subscription audit
    suggestions.push({
      id: 5,
      type: "action",
      icon: "📱",
      title: "Subscription Audit",
      description: "Review your recurring subscriptions. The average person has 3 unused subscriptions costing $50+/month.",
      savings: 50,
      action: "Review Subscriptions",
    });

    // Investment suggestion
    if (totals.balance > 500) {
      suggestions.push({
        id: 6,
        type: "growth",
        icon: "📈",
        title: "Investment Opportunity",
        description: `You have ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totals.balance)} available. Consider investing in low-cost index funds for long-term growth.`,
        savings: null,
        action: "Learn More",
      });
    }

    return suggestions;
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case "warning":
        return "border-l-yellow-500 bg-yellow-50";
      case "tip":
        return "border-l-blue-500 bg-blue-50";
      case "insight":
        return "border-l-purple-500 bg-purple-50";
      case "action":
        return "border-l-emerald-500 bg-emerald-50";
      case "growth":
        return "border-l-indigo-500 bg-indigo-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            AI Suggestions
          </h3>
          <p className="text-sm text-gray-500">
            Personalized insights based on your spending
          </p>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          PRO
        </span>
      </div>

      {isAnalyzing ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-emerald-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-emerald-500 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
          </div>
          <p className="text-gray-600 mt-4">Analyzing your spending patterns...</p>
          <p className="text-sm text-gray-400 mt-1">This may take a few seconds</p>
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`p-4 rounded-xl border-l-4 ${getTypeStyles(suggestion.type)} transition-all hover:shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{suggestion.icon}</span>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {suggestion.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    {suggestion.savings && (
                      <span className="text-sm font-medium text-emerald-600">
                        Potential savings: ${suggestion.savings}/month
                      </span>
                    )}
                    <button className="px-3 py-1.5 text-sm font-medium text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors">
                      {suggestion.action} →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Summary Card */}
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                💰
              </div>
              <div>
                <h4 className="font-semibold">Total Potential Savings</h4>
                <p className="text-2xl font-bold">
                  ${suggestions.reduce((sum, s) => sum + (s.savings || 0), 0)}/month
                </p>
              </div>
            </div>
            <p className="text-sm text-emerald-100 mt-3">
              Follow these suggestions to optimize your budget and grow your savings!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIExpenseSuggestions;
