import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { groupByCategory, categories } from "../data/demoExpenses";

const ChartView = ({ expenses, chartType = "bar" }) => {
  // Group expenses by category
  const categoryData = groupByCategory(expenses);

  // Prepare data for charts
  const chartData = Object.entries(categoryData).map(([name, data]) => ({
    name,
    total: data.total,
    color: data.color,
    icon: data.icon,
  }));

  // Sort by total descending
  chartData.sort((a, b) => b.total - a.total);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
          <p className="font-medium text-gray-900">
            {data.icon} {data.name}
          </p>
          <p className="text-emerald-600 font-bold">{formatCurrency(data.total)}</p>
        </div>
      );
    }
    return null;
  };

  const totalExpenses = chartData.reduce((sum, d) => sum + d.total, 0);

  if (chartData.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Spending by Category
        </h3>
        <div className="text-center py-8">
          <div className="text-4xl mb-3">📊</div>
          <p className="text-gray-500">No expense data to display</p>
          <p className="text-sm text-gray-400 mt-1">
            Add some expenses to see your spending breakdown
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Spending by Category
        </h3>
        <span className="text-sm text-gray-500">
          Total: {formatCurrency(totalExpenses)}
        </span>
      </div>

      {/* Bar Chart */}
      {chartType === "bar" && (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={formatCurrency} />
              <YAxis
                type="category"
                dataKey="name"
                width={90}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Pie Chart */}
      {chartType === "pie" && (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="total"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value, entry) => (
                  <span className="text-sm text-gray-600">
                    {entry.payload.icon} {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Category Legend with percentages */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {chartData.slice(0, 6).map((category) => {
          const percentage = ((category.total / totalExpenses) * 100).toFixed(1);
          return (
            <div
              key={category.name}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm text-gray-600 flex-1">
                {category.icon} {category.name}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartView;
