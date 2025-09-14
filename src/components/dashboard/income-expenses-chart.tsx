'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Week 1', income: 200, expenses: 100 },
  { name: 'Week 2', income: 500, expenses: 350 },
  { name: 'Week 3', income: 300, expenses: 100 },
  { name: 'Week 4', income: 500, expenses: 300 }
]

const IncomeExpensesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#6b7280', fontSize: 12 }}
        />
        <YAxis hide />
        <Bar dataKey="income" fill="#10b981" radius={[2, 2, 0, 0]} />
        <Bar dataKey="expenses" fill="#3b82f6" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default IncomeExpensesChart