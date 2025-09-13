'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

// Sample data - replace with real data in production
const data = [
  { name: 'Jan', value: 300000 },
  { name: 'Feb', value: 320000 },
  { name: 'Mar', value: 350000 },
  { name: 'Apr', value: 340000 },
  { name: 'May', value: 380000 },
  { name: 'Jun', value: 370000 },
  { name: 'Jul', value: 750813 },
  { name: 'Aug', value: 320000 },
  { name: 'Sep', value: 700000 },
  { name: 'Oct', value: 820000 },
  { name: 'Nov', value: 780000 },
  { name: 'Dec', value: 730000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="text-sm text-primary dark:text-primary-light">
          ₦{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4EAC68" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4EAC68" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#888', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#888', fontSize: 12 }}
            tickFormatter={(value) => {
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
              return value;
            }}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4EAC68"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;