import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import { categories } from "../data/demoExpenses";

const ExpenseList = ({ expenses, onDelete, onEdit, showFilters = true }) => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Filter expenses
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    if (filter === "income") return expense.type === "income";
    if (filter === "expense") return expense.type === "expense";
    return expense.category === filter;
  });

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "amount") {
      return b.amount - a.amount;
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Type Filters */}
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
            {["all", "expense", "income"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  filter === type
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Category Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="category">Sort by Category</option>
          </select>
        </div>
      )}

      {/* Expense Count */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Transactions
        </h2>
        <span className="text-sm text-gray-500">
          {sortedExpenses.length} {sortedExpenses.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Expense Cards */}
      <div className="space-y-3">
        {sortedExpenses.length > 0 ? (
          sortedExpenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-gray-500">No transactions found</p>
            <p className="text-sm text-gray-400 mt-1">
              {filter !== "all"
                ? "Try changing your filters"
                : "Add your first transaction to get started"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
