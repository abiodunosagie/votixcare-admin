'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/main-layout';
import {
  Filter,
  Plus,
  Search as SearchIcon,
} from 'lucide-react';
import StaffTabs from '@/components/staff/staff-tabs';
import StaffTable from '@/components/staff/staff-table';

export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'doctors' | 'general'>('doctors');

  return (
    <MainLayout>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Staff</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <button className="flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
              <Filter size={20} />
            </button>
            <button className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
              <Plus size={20} />
              <span>Add staff</span>
            </button>
          </div>
        </div>

        {/* Staff Tabs */}
        <StaffTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Staff Count */}
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="text-xl">👥</span>
          </div>
          <span className="text-xl font-medium">25</span>
          <span className="text-sm">Total staff</span>
        </div>

        {/* Staff Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <StaffTable searchQuery={searchQuery} activeTab={activeTab} />
        </div>
      </div>
    </MainLayout>
  );
}