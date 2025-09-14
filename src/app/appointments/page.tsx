'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Calendar, ChevronLeft, ChevronRight, ChevronDown, Plus } from 'lucide-react'

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState(15)

  // January 2025 calendar data
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const calendarData = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null]
  ]

  // Appointments for January 15, 2025
  const todaysAppointments = [
    {
      time: '3 PM',
      patient: 'Simon David',
      treatment: 'Myopia',
      avatar: 'S',
      color: 'bg-blue-500'
    },
    {
      time: '2 PM',
      patient: 'Bimpe David',
      treatment: 'Cataracts',
      avatar: 'B',
      color: 'bg-gray-600'
    },
    {
      time: '12 PM',
      patient: 'David Ryms',
      treatment: 'Glaucoma',
      avatar: 'AD',
      color: 'bg-red-500'
    },
    {
      time: '11 AM',
      patient: 'Damola Doe',
      treatment: 'Refractive error',
      avatar: 'DD',
      color: 'bg-blue-600',
      isHighlighted: true
    },
    {
      time: '9 AM',
      patient: 'Jess Simon',
      treatment: 'Refractive error',
      avatar: 'J',
      color: 'bg-orange-500'
    }
  ]

  // Today's schedule avatars
  const scheduleAvatars = [
    { avatar: 'DD', color: 'bg-gray-600' },
    { avatar: 'AD', color: 'bg-red-500' },
    { avatar: 'S', color: 'bg-blue-500' },
    { avatar: 'J', color: 'bg-gray-800' },
    { avatar: 'B', color: 'bg-orange-500' }
  ]

  return (
    <MainLayout title="Appointments" icon={<Calendar />}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
              Today
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </button>

            <span className="text-lg font-medium text-gray-900">Fri 15 January 2025</span>

            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <button className="btn btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add appointment
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">January 2025</h3>
              <span className="text-sm text-gray-500">34 Appointments</span>
            </div>

            <div className="mb-6">
              {/* Days header */}
              <div className="grid grid-cols-7 gap-1 mb-3">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="space-y-1">
                {calendarData.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-1">
                    {week.map((date, dayIndex) => (
                      <div key={dayIndex} className="relative">
                        {date ? (
                          <button
                            onClick={() => setSelectedDate(date)}
                            className={`w-9 h-9 text-sm rounded-lg flex items-center justify-center transition-all duration-200 ${
                              date === 15
                                ? 'bg-green-500 text-white font-semibold shadow-lg'
                                : date === 13 || date === 16 || date === 17
                                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 font-medium'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {date}
                          </button>
                        ) : (
                          <div className="w-9 h-9"></div>
                        )}

                        {/* Appointment dots */}
                        {(date === 22 || date === 23) && (
                          <div className="absolute top-1 right-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Prev
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Next
              </button>
            </div>
          </div>

          {/* Today's Schedule Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Today's Schedule</h3>
              <span className="text-sm text-gray-500">5 Appointments</span>
            </div>

            {/* Avatar row */}
            <div className="flex items-center space-x-2 mb-8">
              {scheduleAvatars.map((item, index) => (
                <div
                  key={index}
                  className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-medium`}
                >
                  {item.avatar}
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-1">
              {/* Empty slots */}
              <div className="flex items-center py-3">
                <span className="w-16 text-right text-sm text-gray-400 mr-4">5 PM</span>
                <div className="flex-1 border-l-2 border-gray-100 pl-4"></div>
              </div>

              <div className="flex items-center py-3">
                <span className="w-16 text-right text-sm text-gray-400 mr-4">4 PM</span>
                <div className="flex-1 border-l-2 border-gray-100 pl-4"></div>
              </div>

              {/* Appointment slots */}
              {todaysAppointments.map((appointment, index) => (
                <div key={index} className={`flex items-center py-3 ${appointment.isHighlighted ? 'bg-blue-50 -mx-6 px-6 rounded-lg' : ''}`}>
                  <span className="w-16 text-right text-sm font-medium text-gray-600 mr-4">
                    {appointment.time}
                  </span>
                  <div className={`flex-1 border-l-2 ${appointment.isHighlighted ? 'border-blue-500' : 'border-gray-100'} pl-4`}>
                    <div className="flex items-center">
                      <div className={`w-7 h-7 rounded-full ${appointment.color} flex items-center justify-center text-white text-xs font-medium mr-3`}>
                        {appointment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {appointment.patient} - {appointment.treatment}
                        </div>
                      </div>
                      {appointment.isHighlighted && (
                        <button className="px-3 py-1.5 text-xs font-medium bg-white border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                          Re-schedule
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* More empty slots */}
              <div className="flex items-center py-3">
                <span className="w-16 text-right text-sm text-gray-400 mr-4">10 AM</span>
                <div className="flex-1 border-l-2 border-gray-100 pl-4"></div>
              </div>

              <div className="flex items-center py-3">
                <span className="w-16 text-right text-sm text-gray-400 mr-4">8 AM</span>
                <div className="flex-1 border-l-2 border-gray-100 pl-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AppointmentsPage