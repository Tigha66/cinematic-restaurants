// Demo expenses data with 25+ realistic transactions across all categories
// Used for demonstration and when user has no actual data

const demoExpenses = [
  // Food category
  { id: "1", title: "Grocery Shopping", category: "Food", amount: 156.42, date: "2026-05-01", type: "expense" },
  { id: "2", title: "Coffee Shop", category: "Food", amount: 8.50, date: "2026-05-02", type: "expense" },
  { id: "3", title: "Restaurant Dinner", category: "Food", amount: 67.80, date: "2026-05-05", type: "expense" },
  { id: "4", title: "Fast Food Lunch", category: "Food", amount: 12.99, date: "2026-05-08", type: "expense" },
  { id: "5", title: "Weekly Groceries", category: "Food", amount: 134.25, date: "2026-05-10", type: "expense" },
  
  // Transport category
  { id: "6", title: "Gas Station", category: "Transport", amount: 45.00, date: "2026-05-01", type: "expense" },
  { id: "7", title: "Uber Ride", category: "Transport", amount: 18.75, date: "2026-05-03", type: "expense" },
  { id: "8", title: "Monthly Metro Pass", category: "Transport", amount: 95.00, date: "2026-05-01", type: "expense" },
  { id: "9", title: "Parking Fee", category: "Transport", amount: 15.00, date: "2026-05-07", type: "expense" },
  
  // Entertainment category
  { id: "10", title: "Netflix Subscription", category: "Entertainment", amount: 15.99, date: "2026-05-01", type: "expense" },
  { id: "11", title: "Movie Tickets", category: "Entertainment", amount: 32.00, date: "2026-05-04", type: "expense" },
  { id: "12", title: "Spotify Premium", category: "Entertainment", amount: 10.99, date: "2026-05-01", type: "expense" },
  { id: "13", title: "Concert Tickets", category: "Entertainment", amount: 85.00, date: "2026-05-12", type: "expense" },
  
  // Utilities category
  { id: "14", title: "Electricity Bill", category: "Utilities", amount: 89.50, date: "2026-05-05", type: "expense" },
  { id: "15", title: "Water Bill", category: "Utilities", amount: 35.00, date: "2026-05-05", type: "expense" },
  { id: "16", title: "Internet Service", category: "Utilities", amount: 59.99, date: "2026-05-01", type: "expense" },
  { id: "17", title: "Phone Bill", category: "Utilities", amount: 75.00, date: "2026-05-03", type: "expense" },
  
  // Health category
  { id: "18", title: "Gym Membership", category: "Health", amount: 49.99, date: "2026-05-01", type: "expense" },
  { id: "19", title: "Pharmacy", category: "Health", amount: 28.50, date: "2026-05-06", type: "expense" },
  { id: "20", title: "Doctor Visit Copay", category: "Health", amount: 25.00, date: "2026-05-09", type: "expense" },
  
  // Others category
  { id: "21", title: "Amazon Purchase", category: "Others", amount: 42.99, date: "2026-05-02", type: "expense" },
  { id: "22", title: "Clothing", category: "Others", amount: 89.00, date: "2026-05-07", type: "expense" },
  { id: "23", title: "Gift for Friend", category: "Others", amount: 35.00, date: "2026-05-10", type: "expense" },
  { id: "24", title: "Home Supplies", category: "Others", amount: 54.75, date: "2026-05-11", type: "expense" },
  { id: "25", title: "Haircut", category: "Others", amount: 30.00, date: "2026-05-13", type: "expense" },
  
  // Income entries
  { id: "26", title: "Monthly Salary", category: "Income", amount: 4500.00, date: "2026-05-01", type: "income" },
  { id: "27", title: "Freelance Project", category: "Income", amount: 750.00, date: "2026-05-08", type: "income" },
  { id: "28", title: "Dividend Payment", category: "Income", amount: 125.50, date: "2026-05-15", type: "income" },
];

// Category configuration with colors and icons
export const categories = [
  { name: "Food", color: "#F59E0B", icon: "🍔", budget: 400 },
  { name: "Transport", color: "#3B82F6", icon: "🚗", budget: 200 },
  { name: "Entertainment", color: "#8B5CF6", icon: "🎬", budget: 150 },
  { name: "Utilities", color: "#6B7280", icon: "💡", budget: 300 },
  { name: "Health", color: "#10B981", icon: "💊", budget: 150 },
  { name: "Others", color: "#EC4899", icon: "📦", budget: 200 },
  { name: "Income", color: "#059669", icon: "💰", budget: 0 },
];

// Helper function to get category info
export const getCategoryInfo = (categoryName) => {
  return categories.find(c => c.name === categoryName) || { name: categoryName, color: "#6B7280", icon: "📋", budget: 0 };
};

// Calculate totals helper
export const calculateTotals = (expenses) => {
  const income = expenses
    .filter(e => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);
  
  const totalExpenses = expenses
    .filter(e => e.type === "expense")
    .reduce((sum, e) => sum + e.amount, 0);
  
  const balance = income - totalExpenses;
  
  return { income, expenses: totalExpenses, balance };
};

// Group expenses by category
export const groupByCategory = (expenses) => {
  return expenses
    .filter(e => e.type === "expense")
    .reduce((acc, expense) => {
      const category = expense.category;
      if (!acc[category]) {
        acc[category] = { total: 0, items: [], ...getCategoryInfo(category) };
      }
      acc[category].total += expense.amount;
      acc[category].items.push(expense);
      return acc;
    }, {});
};

export default demoExpenses;
