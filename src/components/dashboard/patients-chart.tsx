'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data - replace with real data in production
const data = [
  { name: 'Men', value: 35, color: '#3B82F6' },  // Blue
  { name: 'Women', value: 40, color: '#EC4899' }, // Pink
  { name: 'Children', value: 25, color: '#8B5CF6' } // Purple
];

const COLORS = data.map(item => item.color);

const PatientsChart = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-48 w-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={2}
              stroke="#fff"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">355</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Patients</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsChart;