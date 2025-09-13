'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/main-layout';
import { format } from 'date-fns';
import {
  ChevronDown,
  Plus,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import RevenueChart from '@/components/dashboard/revenue-chart';
import ExpensesPieChart from '@/components/dashboard/expenses-pie-chart';
import PatientsChart from '@/components/dashboard/patients-chart';
import StaffList from '@/components/dashboard/staff-list';
import AppointmentsList from '@/components/dashboard/appointments-list';

export default function DashboardPage() {
  const [currentDate] = useState(new Date());

  return (
    <MainLayout>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Good Morning, Dr Jessica</h1>
          <p className="text-gray-500 dark:text-gray-400">{format(currentDate, 'EEEE, MMMM d, yyyy')}</p>
        </div>

        {/* Revenue Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Total Revenue Generated</h2>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1">
                  <span>Last 12 months</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">₦3,846,813</h3>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">+8.2%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">January 1st - December 31st</p>
              </div>
              <RevenueChart />
            </div>
          </div>

          {/* Expenses Overview Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Expenses</h2>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1">
                  <span>Last month</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <ExpensesPieChart />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Salary', percentage: '37%', amount: '₦450,000', trend: 'up' },
                { name: 'Rental cost', percentage: '20%', amount: '₦300,000', trend: 'up' },
                { name: 'Supplies', percentage: '20%', amount: '₦160,000', trend: 'down' },
                { name: 'Medical equip.', percentage: '10%', amount: '₦100,000', trend: 'up' },
              ].map((expense, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-yellow-400' :
                      index === 1 ? 'bg-blue-400' :
                      index === 2 ? 'bg-yellow-500' :
                      'bg-pink-400'
                    }`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{expense.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-semibold ${
                      index === 0 ? 'text-yellow-600 dark:text-yellow-400' :
                      index === 1 ? 'text-blue-600 dark:text-blue-400' :
                      index === 2 ? 'text-yellow-600 dark:text-yellow-500' :
                      'text-pink-600 dark:text-pink-400'
                    }`}>
                      {expense.percentage}
                    </span>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{expense.amount}</p>
                      <div className="flex items-center text-xs">
                        {expense.trend === 'up' ? (
                          <TrendingUp size={12} className="text-green-500 mr-1" />
                        ) : (
                          <TrendingDown size={12} className="text-red-500 mr-1" />
                        )}
                        <span className={expense.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                          {expense.trend === 'up' ? '+4.3%' : '-2.5%'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Income and Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Income and expenses</h2>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1">
                  <span>This month</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Total income</span>
                </div>
                <div className="flex items-center mt-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">₦3,846,813</h3>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">+8.2%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Total expenses</span>
                </div>
                <div className="flex items-center mt-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">₦1,846,813</h3>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">-2.4%</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              {/* Weekly income/expense bar chart would go here */}
              <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                <p>Weekly comparison chart</p>
              </div>
            </div>
          </div>

          {/* Patients Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Patients</h2>
              <button className="flex items-center space-x-1 text-sm text-white bg-primary rounded-md px-3 py-1.5 hover:bg-primary-dark transition-colors">
                <Plus size={16} />
                <span>Add Patient</span>
              </button>
            </div>
            <div className="flex justify-center mb-6">
              <PatientsChart />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Men</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">35%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Women</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">40%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Children</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">25%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Returning patients</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">New patients</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">35%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>

          {/* Active Staff */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Active staff</h2>
              <button className="flex items-center space-x-1 text-sm text-white bg-primary rounded-md px-3 py-1.5 hover:bg-primary-dark transition-colors">
                <Plus size={16} />
                <span>Add staff</span>
              </button>
            </div>
            <StaffList />
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming appointments</h2>
            <button className="flex items-center space-x-1 text-sm text-white bg-primary rounded-md px-3 py-1.5 hover:bg-primary-dark transition-colors">
              <Plus size={16} />
              <span>Add appointment</span>
            </button>
          </div>
          <AppointmentsList />
        </div>
      </div>
    </MainLayout>
  );
}