import React, { useState } from "react";
import { categories } from "../data/demoExpenses";

const AddExpenseForm = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
    type: "expense",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const expenseCategories = categories.filter((c) => c.name !== "Income");

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const newExpense = {
        ...formData,
        amount: parseFloat(formData.amount),
        id: "exp_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      };
      await onAdd(newExpense);

      // Reset form
      setFormData({
        title: "",
        amount: "",
        category: "Food",
        date: new Date().toISOString().split("T")[0],
        type: "expense",
      });

      if (onClose) onClose();
    } catch (error) {
      console.error("Error adding expense:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideUp">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Add Transaction</h2>
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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type Toggle */}
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          {["expense", "income"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData((prev) => ({
                ...prev,
                type,
                category: type === "income" ? "Income" : "Food"
              }))}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                formData.type === type
                  ? type === "expense"
                    ? "bg-red-500 text-white"
                    : "bg-emerald-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {type === "expense" ? "💸 Expense" : "💰 Income"}
            </button>
          ))}
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Grocery shopping"
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.title ? "border-red-300 bg-red-50" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              className={`w-full pl-8 pr-4 py-2.5 rounded-lg border ${
                errors.amount ? "border-red-300 bg-red-50" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
            />
          </div>
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
          )}
        </div>

        {/* Category (only for expenses) */}
        {formData.type === "expense" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {expenseCategories.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, category: cat.name }))
                  }
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    formData.category === cat.name
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span className="text-xl mb-1">{cat.icon}</span>
                  <span className="text-xs font-medium text-gray-700">
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.date ? "border-red-300 bg-red-50" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : formData.type === "expense"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Adding...
            </span>
          ) : (
            `Add ${formData.type === "expense" ? "Expense" : "Income"}`
          )}
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
