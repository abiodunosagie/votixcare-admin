'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Sample data - replace with real data in production
const staffMembers = [
  {
    id: 1,
    name: 'Jessica Adams',
    role: 'Admin',
    avatar: '/avatars/avatar-1.svg',
    status: 'online',
  },
  {
    id: 2,
    name: 'Mary Simon',
    role: 'Admin',
    avatar: '/avatars/avatar-1.svg',
    status: 'online',
  },
  {
    id: 3,
    name: 'Jessica Jessica',
    role: 'Nurse',
    avatar: '/avatars/avatar-1.svg',
    status: 'offline',
  },
  {
    id: 4,
    name: 'Emma Jessica',
    role: 'Doctor',
    avatar: '/avatars/avatar-1.svg',
    status: 'online',
  },
  {
    id: 5,
    name: 'Jessica Jessica',
    role: 'Nurse',
    avatar: '/avatars/avatar-1.svg',
    status: 'offline',
  },
];

const StaffList = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-4">
        {staffMembers.slice(0, 5).map((staff) => (
          <div key={staff.id} className="flex flex-col items-center">
            <div className="relative">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <Image
                  src={staff.avatar}
                  alt={staff.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
                staff.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            </div>
            <p className="mt-2 text-xs font-medium text-gray-900 dark:text-white text-center">{staff.name.split(' ')[0]}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{staff.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
          <span>See more</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StaffList;