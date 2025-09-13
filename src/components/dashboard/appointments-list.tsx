'use client';

import { format } from 'date-fns';

// Sample data - replace with real data in production
const appointments = [
  {
    id: 1,
    patient: 'David Ryms',
    treatment: 'Eye checkup',
    date: new Date(2025, 0, 17, 10, 15),
  },
  {
    id: 2,
    patient: 'Simon Bank',
    treatment: 'Refractive error',
    date: new Date(2025, 0, 22, 12, 45),
  },
  {
    id: 3,
    patient: 'Carlos Tez',
    treatment: 'Myopia',
    date: new Date(2025, 1, 2, 9, 0),
  },
  {
    id: 4,
    patient: 'Ade Dayo',
    treatment: 'Cataracts',
    date: new Date(2025, 1, 12, 10, 15),
  },
];

const AppointmentsList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Patient name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Treatment
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Schedule
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                    {appointment.patient}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">{appointment.treatment}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {format(appointment.date, 'MMM. d, yyyy')} {format(appointment.date, 'h:mm a')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;