'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/main-layout';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon
} from 'lucide-react';
import { format } from 'date-fns';
import AppointmentCalendar from '@/components/appointments/appointment-calendar';
import ScheduleList from '@/components/appointments/schedule-list';

export default function AppointmentsPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 15));
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('day');

  const nextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const prevDay = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  return (
    <MainLayout>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Appointments</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-64 pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <button className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
              <Plus size={20} />
              <span>Add appointment</span>
            </button>
          </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 text-sm ${
                viewMode === 'day'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Today
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevDay}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Fri, 15 January 2025
            </span>
            <button
              onClick={nextDay}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">January 2025</h2>
            <AppointmentCalendar
              currentDate={currentDate}
              onDateChange={(date) => setCurrentDate(date)}
            />
          </div>

          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Schedule</h2>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {['AD', 'S', 'AD', 'JD', 'JS'].map((initials, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                        ['bg-red-500', 'bg-blue-500', 'bg-red-500', 'bg-orange-500', 'bg-orange-500'][i]
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">5 Appointments</span>
              </div>
            </div>

            <ScheduleList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}