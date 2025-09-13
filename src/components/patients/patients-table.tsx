'use client';

import { useState, useMemo } from 'react';
import { ArrowUpDown, ChevronUp, ChevronDown } from 'lucide-react';

interface Patient {
  id: number;
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  phone: string;
  email: string;
  occupation: string;
  address: string;
  lastTreatment: string;
  avatar: {
    initials: string;
    color: string;
  };
}

interface PatientsTableProps {
  searchQuery: string;
}

// Sample data - replace with real data in production
const patientsData: Patient[] = [
  {
    id: 1,
    name: 'Damola Dee',
    gender: 'Male',
    age: 31,
    phone: '07067855350',
    email: 'damolaux@gmail.com',
    occupation: 'Consultant',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Refractive errors',
    avatar: {
      initials: 'DD',
      color: 'bg-amber-500',
    },
  },
  {
    id: 2,
    name: 'David Ryms',
    gender: 'Male',
    age: 26,
    phone: '08054782876',
    email: 'davidryms@gmail.com',
    occupation: 'Civil Engineer',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Eye checkup',
    avatar: {
      initials: 'DR',
      color: 'bg-orange-500',
    },
  },
  {
    id: 3,
    name: 'Simon Bank',
    gender: 'Male',
    age: 18,
    phone: '08163728638',
    email: 'simonbank@gmail.com',
    occupation: 'Lecturer',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Refractive errors',
    avatar: {
      initials: 'SB',
      color: 'bg-blue-500',
    },
  },
  {
    id: 4,
    name: 'Carlos Tez',
    gender: 'Male',
    age: 54,
    phone: '08076357897',
    email: 'carlostez@gmail.com',
    occupation: 'Auditor',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Cataracts',
    avatar: {
      initials: 'CT',
      color: 'bg-red-500',
    },
  },
  {
    id: 5,
    name: 'Lillian Voss',
    gender: 'Female',
    age: 45,
    phone: '09152676367',
    email: 'lillianvoss@gmail.com',
    occupation: 'Driver',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Refractive errors',
    avatar: {
      initials: 'LV',
      color: 'bg-purple-500',
    },
  },
  {
    id: 6,
    name: 'Elias Mercer',
    gender: 'Male',
    age: 31,
    phone: '07067855350',
    email: 'eliasmercer@gmail.com',
    occupation: 'Surgeon',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Myopia',
    avatar: {
      initials: 'EM',
      color: 'bg-teal-500',
    },
  },
  {
    id: 7,
    name: 'Rowan Ellis',
    gender: 'Male',
    age: 30,
    phone: '07062836389',
    email: 'rowanellis@gmail.com',
    occupation: 'Consultant',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Refractive errors',
    avatar: {
      initials: 'RE',
      color: 'bg-amber-600',
    },
  },
  {
    id: 8,
    name: 'Emery Tate',
    gender: 'Male',
    age: 35,
    phone: '07067855350',
    email: 'emerytate@gmail.com',
    occupation: 'Managing Director',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Glaucoma',
    avatar: {
      initials: 'ET',
      color: 'bg-gray-800',
    },
  },
  {
    id: 9,
    name: 'Quinn Lennox',
    gender: 'Female',
    age: 54,
    phone: '08145725337',
    email: 'quinnlennox@gmail.com',
    occupation: 'Consultant',
    address: '3, Lane 5, Adeniji avenue, PH',
    lastTreatment: 'Cataracts',
    avatar: {
      initials: 'QL',
      color: 'bg-pink-500',
    },
  },
];

type SortKeys = 'name' | 'gender' | 'age' | 'phone' | 'email' | 'occupation' | 'address' | 'lastTreatment';
type SortOrder = 'asc' | 'desc';

const PatientsTable: React.FC<PatientsTableProps> = ({ searchQuery }) => {
  const [sortKey, setSortKey] = useState<SortKeys>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedPatients, setSelectedPatients] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Filter patients based on search query
  const filteredPatients = useMemo(() => {
    return patientsData.filter(patient => {
      if (!searchQuery) return true;

      const query = searchQuery.toLowerCase();
      return (
        patient.name.toLowerCase().includes(query) ||
        patient.email.toLowerCase().includes(query) ||
        patient.phone.includes(query) ||
        patient.occupation.toLowerCase().includes(query) ||
        patient.lastTreatment.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  // Sort patients based on sort key and order
  const sortedPatients = useMemo(() => {
    return [...filteredPatients].sort((a, b) => {
      if (sortKey === 'age') {
        return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
      }

      const aValue = a[sortKey]?.toString().toLowerCase() || '';
      const bValue = b[sortKey]?.toString().toLowerCase() || '';

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [filteredPatients, sortKey, sortOrder]);

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
      setSelectedPatients([]);
    } else {
      setSelectedPatients(sortedPatients.map(patient => patient.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle select patient
  const handleSelectPatient = (id: number) => {
    if (selectedPatients.includes(id)) {
      setSelectedPatients(selectedPatients.filter(patientId => patientId !== id));
      setSelectAll(false);
    } else {
      setSelectedPatients([...selectedPatients, id]);
      if (selectedPatients.length + 1 === sortedPatients.length) {
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
                Patient Name {renderSortIcon('name')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('gender')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Gender {renderSortIcon('gender')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('age')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Age {renderSortIcon('age')}
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
              <button
                onClick={() => handleSort('occupation')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Occupation {renderSortIcon('occupation')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('address')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Address {renderSortIcon('address')}
              </button>
            </th>
            <th scope="col" className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort('lastTreatment')}
                className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Last Treatment {renderSortIcon('lastTreatment')}
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {sortedPatients.map((patient) => (
            <tr
              key={patient.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedPatients.includes(patient.id)}
                  onChange={() => handleSelectPatient(patient.id)}
                  className="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${patient.avatar.color} flex items-center justify-center text-white text-sm font-medium mr-3`}>
                    {patient.avatar.initials}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {patient.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.gender}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.age}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.phone}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.email}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.occupation}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.address}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{patient.lastTreatment}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;