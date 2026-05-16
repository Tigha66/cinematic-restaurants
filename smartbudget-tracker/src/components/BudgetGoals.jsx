import React, { useState } from "react";
import { categories, groupByCategory } from "../data/demoExpenses";

const BudgetGoals = ({ expenses = [], userBudgets = {} }) => {
  const [editingCategory, setEditingCategory] = useState(null);
  const [budgetValue, setBudgetValue] = useState("");

  // Get actual spending by category
  const categorySpending = groupByCategory(expenses);

  // Default budgets from categories config
  const budgets = categories
    .filter((c) => c.name !== "Income")
    .map((cat) => ({
      ...cat,
      budget: userBudgets[cat.name] || cat.budget,
      spent: categorySpending[cat.name]?.total || 0,
    }));

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressColor = (spent, budget) => {
    if (budget === 0) return "bg-gray-300";
    const percentage = (spent / budget) * 100;
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-emerald-500";
  };

  const getStatusBadge = (spent, budget) => {
    if (budget === 0) return null;
    const percentage = (spent / budget) * 100;
    if (percentage >= 100) {
      return (
        <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
          Over Budget
        </span>
      );
    }
    if (percentage >= 80) {
      return (
        <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
          Near Limit
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
        On Track
      </span>
    );
  };

  const handleSaveBudget = (categoryName) => {
    // In a real app, this would save to Firestore
    console.log(`Setting budget for ${categoryName}: ${budgetValue}`);
    setEditingCategory(null);
    setBudgetValue("");
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Budget Goals</h3>
          <p className="text-sm text-gray-500">Track spending against your budgets</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            PRO
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {budgets.map((category) => {
          const percentage = category.budget > 0
            ? Math.min((category.spent / category.budget) * 100, 100)
            : 0;
          const remaining = category.budget - category.spent;

          return (
            <div
              key={category.name}
              className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{category.name}</h4>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(category.spent)} of {formatCurrency(category.budget)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(category.spent, category.budget)}
                  {editingCategory === category.name ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={budgetValue}
                        onChange={(e) => setBudgetValue(e.target.value)}
                        placeholder="Budget"
                        className="w-24 px-2 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => handleSaveBudget(category.name)}
                        className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setEditingCategory(null);
                          setBudgetValue("");
                        }}
                        className="p-1 text-gray-400 hover:bg-gray-50 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingCategory(category.name);
                        setBudgetValue(category.budget.toString());
                      }}
                      className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors"
                      title="Edit budget"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor(
                    category.spent,
                    category.budget
                  )}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Remaining */}
              <p className="text-xs text-gray-500 mt-2">
                {remaining >= 0
                  ? `${formatCurrency(remaining)} remaining`
                  : `${formatCurrency(Math.abs(remaining))} over budget`}
              </p>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Total Monthly Budget</span>
          <span className="font-semibold text-gray-900">
            {formatCurrency(budgets.reduce((sum, b) => sum + b.budget, 0))}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-600">Total Spent</span>
          <span className="font-semibold text-gray-900">
            {formatCurrency(budgets.reduce((sum, b) => sum + b.spent, 0))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetGoals;
