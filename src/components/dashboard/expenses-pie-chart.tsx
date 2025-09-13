'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Sample data - replace with real data in production
const data = [
  { name: 'Salary', value: 37, color: '#D4AF37' },
  { name: 'Rental cost', value: 20, color: '#4E8EF7' },
  { name: 'Supplies', value: 20, color: '#FACC15' },
  { name: 'Medical equip.', value: 10, color: '#EC4899' },
  { name: 'Others', value: 8, color: '#F97316' },
  { name: 'Repairs', value: 5, color: '#10B981' },
];

const COLORS = data.map(item => item.color);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{payload[0].name}</p>
        <p className="text-sm font-semibold" style={{ color: payload[0].payload.color }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const ExpensesPieChart = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-60 w-60 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={2}
              stroke="#fff"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">₦3,846,813</p>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPieChart;