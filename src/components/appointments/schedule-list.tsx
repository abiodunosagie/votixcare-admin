'use client';

// Sample data - replace with real data in production
const timeSlots = [
  {
    time: '5 PM',
    appointments: [],
  },
  {
    time: '4 PM',
    appointments: [],
  },
  {
    time: '3 PM',
    appointments: [
      {
        id: 1,
        patientName: 'Simon David',
        condition: 'Myopia',
        initials: 'S',
        color: 'bg-blue-500',
      },
    ],
  },
  {
    time: '2 PM',
    appointments: [
      {
        id: 2,
        patientName: 'Bimpe David',
        condition: 'Cataracts',
        initials: 'BD',
        color: 'bg-gray-500',
      },
    ],
  },
  {
    time: '1 PM',
    appointments: [],
  },
  {
    time: '12 PM',
    appointments: [
      {
        id: 3,
        patientName: 'David Ryms',
        condition: 'Glaucoma',
        initials: 'AD',
        color: 'bg-red-500',
      },
    ],
  },
  {
    time: '11 AM',
    appointments: [
      {
        id: 4,
        patientName: 'Damola Dee',
        condition: 'Refractive error',
        initials: 'JD',
        color: 'bg-orange-500',
        actionButton: {
          label: 'Re-schedule',
          color: 'bg-blue-500',
        },
      },
    ],
  },
  {
    time: '10 AM',
    appointments: [],
  },
  {
    time: '9 AM',
    appointments: [
      {
        id: 5,
        patientName: 'Jess Simon',
        condition: 'Refractive error',
        initials: 'JS',
        color: 'bg-orange-500',
      },
    ],
  },
  {
    time: '8 AM',
    appointments: [],
  },
];

const ScheduleList = () => {
  return (
    <div className="space-y-4">
      {timeSlots.map((slot, index) => (
        <div key={index} className="flex">
          <div className="w-20 flex items-center justify-end pr-4 text-sm text-gray-500 dark:text-gray-400">
            {slot.time}
          </div>
          <div className="flex-1 border-t border-gray-200 dark:border-gray-700 relative pt-4">
            {/* Time marker */}
            <div className="absolute top-0 left-0 w-2 h-2 -mt-1 -ml-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>

            {/* Appointments at this time */}
            <div className="space-y-2">
              {slot.appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-full ${appointment.color} flex items-center justify-center text-white text-sm font-medium`}>
                      {appointment.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{appointment.patientName} - {appointment.condition}</p>
                    </div>
                  </div>

                  {appointment.actionButton && (
                    <button className={`px-3 py-1 text-xs font-medium text-white rounded-md ${appointment.actionButton.color}`}>
                      {appointment.actionButton.label}
                    </button>
                  )}
                </div>
              ))}

              {slot.appointments.length === 0 && (
                <div className="h-4"></div> // Empty space for time slots with no appointments
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;