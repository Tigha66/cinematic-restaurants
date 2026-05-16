import React from "react";
import { getCategoryInfo } from "../data/demoExpenses";

const ExpenseCard = ({ expense, onDelete, onEdit }) => {
  const category = getCategoryInfo(expense.category);
  const isIncome = expense.type === "income";

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Category Icon */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
            style={{ backgroundColor: category.color + "20" }}
          >
            {category.icon}
          </div>

          {/* Title and Category */}
          <div>
            <h3 className="font-medium text-gray-900">{expense.title}</h3>
            <p className="text-sm text-gray-500">
              {expense.category} • {formatDate(expense.date)}
            </p>
          </div>
        </div>

        {/* Amount */}
        <div className="flex items-center gap-2">
          <span
            className={`text-lg font-semibold ${
              isIncome ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {isIncome ? "+" : "-"}{formatAmount(expense.amount)}
          </span>

          {/* Actions */}
          {(onDelete || onEdit) && (
            <div className="flex gap-1 ml-2">
              {onEdit && (
                <button
                  onClick={() => onEdit(expense)}
                  className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(expense.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
