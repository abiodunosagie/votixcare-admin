'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 300000 },
  { name: 'Feb', value: 320000 },
  { name: 'Mar', value: 350000 },
  { name: 'Apr', value: 340000 },
  { name: 'May', value: 380000 },
  { name: 'Jun', value: 520000 },
  { name: 'Jul', value: 750000 },
  { name: 'Aug', value: 450000 },
  { name: 'Sep', value: 680000 },
  { name: 'Oct', value: 620000 },
  { name: 'Nov', value: 580000 },
  { name: 'Dec', value: 650000 }
]

const RevenueChart = () => {
  const formatCurrency = (value: number) => {
    return `₦${(value / 1000)}k`
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6b7280', fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6b7280', fontSize: 12 }}
          tickFormatter={formatCurrency}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-gray-900">{`${label}: ₦${payload[0].value?.toLocaleString()}`}</p>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#10b981"
          strokeWidth={3}
          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: '#10b981' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default RevenueChart