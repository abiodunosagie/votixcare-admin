'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Salary', value: 37, color: '#f59e0b' },
  { name: 'Rental cost', value: 20, color: '#3b82f6' },
  { name: 'Supplies', value: 20, color: '#10b981' },
  { name: 'Medical equip.', value: 10, color: '#ec4899' },
  { name: 'Others', value: 8, color: '#8b5cf6' },
  { name: 'Repairs', value: 5, color: '#6b7280' }
]

const ExpensesPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ExpensesPieChart