import React from "react";
import { calculateTotals } from "../data/demoExpenses";

const BudgetSummary = ({ expenses }) => {
  const { income, expenses: totalExpenses, balance } = calculateTotals(expenses);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const savingsRate = income > 0 ? ((balance / income) * 100).toFixed(0) : 0;

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg animate-fadeIn">
      {/* Balance */}
      <div className="text-center mb-6">
        <p className="text-emerald-100 text-sm font-medium mb-1">
          Available Balance
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          {formatCurrency(balance)}
        </h2>
        <p className="text-emerald-200 text-sm mt-2">
          {balance >= 0 ? "You're doing great! 🎉" : "Time to cut expenses 😅"}
        </p>
      </div>

      {/* Income & Expenses Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Income */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
            <span className="text-sm text-emerald-100">Income</span>
          </div>
          <p className="text-2xl font-bold">{formatCurrency(income)}</p>
        </div>

        {/* Expenses */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
            <span className="text-sm text-emerald-100">Expenses</span>
          </div>
          <p className="text-2xl font-bold">{formatCurrency(totalExpenses)}</p>
        </div>
      </div>

      {/* Savings Rate Bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-emerald-100">Savings Rate</span>
          <span className="text-sm font-medium">{savingsRate}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${Math.max(0, Math.min(100, savingsRate))}%` }}
          />
        </div>
        <p className="text-xs text-emerald-200 mt-2 text-center">
          {savingsRate >= 20
            ? "Excellent savings! Keep it up!"
            : savingsRate >= 10
            ? "Good progress on your savings"
            : "Try to save at least 20% of your income"}
        </p>
      </div>
    </div>
  );
};

export default BudgetSummary;
