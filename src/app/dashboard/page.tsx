'use client'

import MainLayout from '@/components/layout/main-layout'
import { Home, ChevronDown, Plus, TrendingUp } from 'lucide-react'
import RevenueChart from '@/components/dashboard/revenue-chart'
import ExpensesPieChart from '@/components/dashboard/expenses-pie-chart'
import PatientsChart from '@/components/dashboard/patients-chart'
import IncomeExpensesChart from '@/components/dashboard/income-expenses-chart'

const DashboardPage = () => {
  const staffMembers = [
    { name: 'Jessica Adams', role: 'Dentist', avatar: 'JA' },
    { name: 'May Simon', role: 'Dental hygienist', avatar: 'MS' },
    { name: 'Jessica Jessica', role: 'Dental assistant', avatar: 'JJ' },
    { name: 'Jessica Jessica', role: 'Dental assistant', avatar: 'JJ' },
    { name: 'Jessica Jessica', role: 'Office manager', avatar: 'JJ' }
  ]

  const appointments = [
    { patient: 'David Ryms', treatment: 'Eye checkup', schedule: 'Jan 17, 2025  10:15 AM' },
    { patient: 'Simon Bank', treatment: 'Refractive error', schedule: 'Jan 22, 2025  02:45 PM' },
    { patient: 'Carlos Tez', treatment: 'Myopia', schedule: 'Feb 2, 2025   9:00 AM' },
    { patient: 'Ade Dayo', treatment: 'Cataracts', schedule: 'Feb 12, 2025  10:15 AM' }
  ]

  return (
    <MainLayout title="Dashboard" icon={<Home />}>
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Good Morning, Dr Jessica</h1>
          <p className="text-gray-500">Wednesday, January 26, 2025</p>
        </div>

        {/* Row 1: Total Revenue Generated + Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Total Revenue Generated */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Total Revenue Generated</h2>
                <div className="flex items-center mt-2">
                  <span className="text-3xl font-bold text-gray-900">₦3,846,813</span>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">+8.2%</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">January 1st - December 31st</p>
              </div>
              <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                Last 12 months
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="chart-container">
              <RevenueChart />
            </div>
          </div>

          {/* Expenses */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Expenses</h2>
              <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                Last month
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="relative mb-6">
              <ExpensesPieChart />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₦3,846,813</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Salary</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">37%</div>
                  <div className="text-xs text-gray-500">₦450,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Rental cost</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">20%</div>
                  <div className="text-xs text-gray-500">₦300,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Supplies</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">20%</div>
                  <div className="text-xs text-gray-500">₦160,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Medical equip.</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">10%</div>
                  <div className="text-xs text-gray-500">₦100,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Others</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">8%</div>
                  <div className="text-xs text-gray-500">₦80,000</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Repairs</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">5%</div>
                  <div className="text-xs text-gray-500">₦50,000</div>
                </div>
              </div>

              {/* Top expenses section */}
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Top expenses</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Salary</span>
                    </div>
                    <span className="font-medium">₦450,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Rental cost</span>
                    </div>
                    <span className="font-medium">₦300,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Supplies</span>
                    </div>
                    <span className="font-medium">₦160,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Medical equip.</span>
                    </div>
                    <span className="font-medium">₦100,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Income and expenses + Patients + Active staff */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Income and expenses */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Income and expenses</h2>
              <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                This month
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Total income</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">₦3,846,813</span>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">+8.2%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Total expenses</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">₦1,846,813</span>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">-2.4%</span>
                </div>
              </div>
            </div>

            <div className="chart-container">
              <IncomeExpensesChart />
            </div>
          </div>

          {/* Patients */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Patients</h2>
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-1" />
                Add Patient
              </button>
            </div>

            <div className="relative mb-6">
              <PatientsChart />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">355</div>
                  <div className="text-sm text-gray-500">Patients</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Men</span>
                </div>
                <span className="text-sm font-medium text-gray-900">130</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '37%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Women</span>
                </div>
                <span className="text-sm font-medium text-gray-900">170</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '48%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Children</span>
                </div>
                <span className="text-sm font-medium text-gray-900">50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>

            {/* Additional progress bars section matching screenshot */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Returning patients</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">New patients</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>

          {/* Active staff */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Active staff</h2>
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-1" />
                Add staff
              </button>
            </div>

            <div className="space-y-4">
              {staffMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium mr-3">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <button className="text-green-600 text-sm font-medium flex items-center">
                  See more
                  <TrendingUp className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Upcoming appointments (full width) */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming appointments</h2>
            <button className="btn btn-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add appointment
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient name</th>
                  <th>Treatment</th>
                  <th>Schedule</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td className="font-medium text-gray-900">{appointment.patient}</td>
                    <td className="text-gray-600">{appointment.treatment}</td>
                    <td className="text-gray-600">{appointment.schedule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default DashboardPage