'use client';

interface StaffTabsProps {
  activeTab: 'doctors' | 'general';
  onTabChange: (tab: 'doctors' | 'general') => void;
}

const StaffTabs: React.FC<StaffTabsProps> = ({
  activeTab,
  onTabChange
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('doctors')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'doctors'
              ? 'border-primary text-primary dark:text-primary-light dark:border-primary-light'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
          }`}
        >
          Doctors
        </button>
        <button
          onClick={() => onTabChange('general')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'general'
              ? 'border-primary text-primary dark:text-primary-light dark:border-primary-light'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
          }`}
        >
          General staff
        </button>
      </nav>
    </div>
  );
};

export default StaffTabs;