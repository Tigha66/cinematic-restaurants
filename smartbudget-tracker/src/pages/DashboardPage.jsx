import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import ExpenseList from "../components/ExpenseList";
import BudgetSummary from "../components/BudgetSummary";
import ChartView from "../components/ChartView";
import BudgetGoals from "../components/BudgetGoals";
import AIExpenseSuggestions from "../components/AIExpenseSuggestions";
import AddExpenseForm from "../components/AddExpenseForm";
import PremiumFeatureGate from "../components/PremiumFeatureGate";
import ProfilePanel from "../components/ProfilePanel";
import demoExpenses from "../data/demoExpenses";
import { getExpenses, addExpense, removeExpense } from "../services/expenseService";

const DashboardPage = () => {
  const { currentUser, userProfile } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    loadExpenses();
  }, [currentUser]);

  const loadExpenses = async () => {
    setLoading(true);
    try {
      if (currentUser) {
        const result = await getExpenses(currentUser.uid);
        if (result.success && result.data.length > 0) {
          setExpenses(result.data);
        } else {
          // Use demo data if no expenses found
          setExpenses(demoExpenses);
        }
      } else {
        // Use demo data for non-authenticated users
        setExpenses(demoExpenses);
      }
    } catch (error) {
      console.error("Error loading expenses:", error);
      setExpenses(demoExpenses);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      if (currentUser) {
        await addExpense(currentUser.uid, newExpense);
      }
      setExpenses((prev) => [newExpense, ...prev]);
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      if (currentUser) {
        await removeExpense(currentUser.uid, expenseId);
      }
      setExpenses((prev) => prev.filter((e) => e.id !== expenseId));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "transactions", label: "Transactions", icon: "💳" },
    { id: "insights", label: "Insights", icon: "💡" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">SmartBudget</h1>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Add Button */}
              <button
                onClick={() => setShowAddForm(true)}
                className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>

              {/* Profile Button */}
              <button
                onClick={() => setShowProfile(true)}
                className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                {currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || "U"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6 pb-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-4">Loading your data...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Budget Summary - Always visible */}
            <BudgetSummary expenses={expenses} />

            {/* Tab Navigation */}
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6 animate-fadeIn">
                <ChartView expenses={expenses} chartType="bar" />
                <ExpenseList
                  expenses={expenses.slice(0, 5)}
                  onDelete={handleDeleteExpense}
                  showFilters={false}
                />
              </div>
            )}

            {activeTab === "transactions" && (
              <div className="animate-fadeIn">
                <ExpenseList
                  expenses={expenses}
                  onDelete={handleDeleteExpense}
                  showFilters={true}
                />
              </div>
            )}

            {activeTab === "insights" && (
              <div className="space-y-6 animate-fadeIn">
                {/* Premium Features - Gated */}
                <PremiumFeatureGate user={userProfile} showModal={false}>
                  <BudgetGoals expenses={expenses} />
                </PremiumFeatureGate>

                <PremiumFeatureGate user={userProfile} showModal={false}>
                  <AIExpenseSuggestions expenses={expenses} />
                </PremiumFeatureGate>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-lg mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {[
              { id: "overview", icon: "🏠", label: "Home" },
              { id: "transactions", icon: "💳", label: "Transactions" },
              { id: "insights", icon: "💡", label: "Insights" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-1 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "text-emerald-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Add Expense Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAddForm(false)}
          />
          <div className="relative w-full max-w-md">
            <AddExpenseForm
              onAdd={handleAddExpense}
              onClose={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}

      {/* Profile Panel */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowProfile(false)}
          />
          <div className="relative w-full max-w-md">
            <ProfilePanel onClose={() => setShowProfile(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
