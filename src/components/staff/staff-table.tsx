'use client';

import { useState, useMemo } from 'react';
import { ArrowUpDown, ChevronUp, ChevronDown } from 'lucide-react';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  workingDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  workSchedule: 'Full Time' | 'Part Time';
  avatar: {
    initials: string;
    color: string;
  };
}

interface StaffTableProps {
  searchQuery: string;
  activeTab: 'doctors' | 'general';
}

// Sample data - replace with real data in production
const staffData: StaffMember[] = [
  {
    id: 1,
    name: 'Dr. Damola Dee',
    position: 'Optician',
    phone: '07067855350',
    email: 'damolaux@gmail.com',
    workingDays: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true,
      sunday: false,
    },
    workSchedule: 'Full Time',
    avatar: {
      initials: 'DD',
      color: 'bg-amber-500',
    },
  },
  {
    id: 2,
    name: 'Dr. Jessica Adams',
    position: 'Optician',
    phone: '08054782876',
    email: 'jessica.adams@gmail.com',
    workingDays: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: true,
    },
    workSchedule: 'Full Time',
    avatar: {
      initials: 'JA',
      color: 'bg-orange-500',
    },
  },
  {
    id: 3,
    name: 'Dr. Simon Bank',
    position: 'Optician',
    phone: '08163728638',
    email: 'simonbank@gmail.com',
    workingDays: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: true,
    },
    workSchedule: 'Part Time',
    avatar: {
      initials: 'SB',
      color: 'bg-blue-500',
    },
  },
  {
    id: 4,
    name: 'Dr. Carlos Tez',
    position: 'Optician',
    phone: '08076357897',
    email: 'carlostez@gmail.com',
    workingDays: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: true,
    },
    workSchedule: 'Full Time',
    avatar: {
      initials: 'CT',
      color: 'bg-red-500',
    },
  },
  {
    id: 5,
    name: 'Mary Johnson',
    position: 'Receptionist',
    phone: '08145725337',
    email: 'mary.johnson@gmail.com',
    workingDays: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
    workSchedule: 'Full Time',
    avatar: {
      initials: 'MJ',
      color: 'bg-purple-500',
    },
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    position: 'Nurse',
    phone: '09012345678',
    email: 'sarah.wilson@gmail.com',
    workingDays: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
    },
    workSchedule: 'Part Time',
    avatar: {
      initials: 'SW',
      color: 'bg-green-500',
    },
  },
];

type SortKeys = 'name' | 'position' | 'phone' | 'email' | 'workSchedule';
type SortOrder = 'asc' | 'desc';

const StaffTable: React.FC<StaffTableProps> = ({
  searchQuery,
  activeTab,
}) => {
  const [sortKey, setSortKey] = useState<SortKeys>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedStaff, setSelectedStaff] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Filter staff based on search query and active tab
  const filteredStaff = useMemo(() => {
    return staffData.filter(staff => {
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !staff.name.toLowerCase().includes(query) &&
          !staff.email.toLowerCase().includes(query) &&
          !staff.phone.includes(query) &&
          !staff.position.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      // Filter by active tab
      if (activeTab === 'doctors') {
        return staff.position === 'Optician';
      }

      return staff.position !== 'Optician';
    });
  }, [searchQuery, activeTab]);

  // Sort staff based on sort key and order
  const sortedStaff = useMemo(() => {
    return [...filteredStaff].sort((a, b) => {
      const aValue = a[sortKey]?.toString().toLowerCase() || '';
      const bValue = b[sortKey]?.toString().toLowerCase() || '';

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [filteredStaff, sortKey, sortOrder]);

  // Handle sorting
  const handleSort = (key: SortKeys) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStaff([]);
    } else {
      setSelectedStaff(sortedStaff.map(staff => staff.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle select staff
  const handleSelectStaff = (id: number) => {
    if (selectedStaff.includes(id)) {
      setSelectedStaff(selectedStaff.filter(staffId => staffId !== id));
      setSelectAll(false);
    } else {
      setSelectedStaff([...selectedStaff, id]);
      if (selectedStaff.length + 1 === sortedStaff.length) {
        setSelectAll(true);
      }
    }
  };

  // Render sort icon
  const renderSortIcon = (key: SortKeys) => {
    if (sortKey === key) {
      return sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    }
    return <ArrowUpDown size={16} />;
  };

  // Render working day indicator
  const renderDayIndicator = (isWorking: boolean) => {
    return (
      <div
        className={`h-6 w-6 rounded-full ${
          isWorking ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
        } flex items-center justify-center text-white text-xs font-medium`}
      >
        {isWorking ? '✓' : ''}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-4 py-3 text-left">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 rounded"
                />
              </div>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('name')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Name {renderSortIcon('name')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('phone')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Phone {renderSortIcon('phone')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('email')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Email {renderSortIcon('email')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Working Days
              </span>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('workSchedule')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Work Schedule {renderSortIcon('workSchedule')}
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {sortedStaff.map((staff) => (
            <tr
              key={staff.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedStaff.includes(staff.id)}
                  onChange={() => handleSelectStaff(staff.id)}
                  className="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${staff.avatar.color} flex items-center justify-center text-white text-sm font-medium mr-3`}>
                    {staff.avatar.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {staff.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {staff.position}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{staff.phone}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{staff.email}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex space-x-1">
                  {renderDayIndicator(staff.workingDays.monday)}
                  {renderDayIndicator(staff.workingDays.tuesday)}
                  {renderDayIndicator(staff.workingDays.wednesday)}
                  {renderDayIndicator(staff.workingDays.thursday)}
                  {renderDayIndicator(staff.workingDays.friday)}
                  {renderDayIndicator(staff.workingDays.saturday)}
                  {renderDayIndicator(staff.workingDays.sunday)}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{staff.workSchedule}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;