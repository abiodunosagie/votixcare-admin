'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Users2, Filter, Plus } from 'lucide-react'

const StaffPage = () => {
  const [activeTab, setActiveTab] = useState('doctors')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Damola Doe',
      avatar: 'DD',
      phone: '07067855350',
      email: 'damolauw@gmail.com',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      activeWorkingDays: [1, 2, 3, 4, 5],
      schedule: 'Full Time'
    },
    {
      id: 2,
      name: 'Dr. Jessica Adams',
      avatar: 'JA',
      phone: '08054782876',
      email: 'davidryms@gmail.com',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      activeWorkingDays: [1, 2, 3, 4, 5],
      schedule: 'Full Time'
    },
    {
      id: 3,
      name: 'Dr. Simon Bank',
      avatar: 'SB',
      phone: '08163728638',
      email: 'simonbank@gmail.com',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      activeWorkingDays: [1, 2, 3, 4, 5],
      schedule: 'Part Time'
    },
    {
      id: 4,
      name: 'Dr. Carlos Tez',
      avatar: 'CT',
      phone: '08076357897',
      email: 'carlostez@gmail.com',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      activeWorkingDays: [1, 2, 3, 4, 5],
      schedule: 'Full Time'
    }
  ]

  const generalStaff = [
    {
      id: 5,
      name: 'Lillian Voss',
      avatar: 'LV',
      phone: '09152676367',
      email: 'lillianvoss@gmail.com',
      workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      activeWorkingDays: [1, 2, 3, 4, 5],
      schedule: 'Full Time'
    }
  ]

  const currentStaff = activeTab === 'doctors' ? doctors : generalStaff
  const totalStaff = activeTab === 'doctors' ? 25 : 15

  const getAvatarColor = (index: number) => {
    const colors = [
      'bg-orange-500',
      'bg-green-500',
      'bg-blue-500',
      'bg-red-500',
      'bg-purple-500'
    ]
    return colors[index % colors.length]
  }

  return (
    <MainLayout title="Patients" icon={<Users2 />}>
      <div className="space-y-6">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'doctors'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Doctors
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'general'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              General staffs
            </button>
          </nav>
        </div>

        {/* Header with staff count and actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users2 className="w-6 h-6 text-gray-400 mr-2" />
            <span className="text-2xl font-bold text-gray-900">{totalStaff}</span>
            <span className="text-gray-500 ml-2">Total staffs</span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="btn btn-secondary">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </button>
            <button className="btn btn-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add patient
            </button>
          </div>
        </div>

        {/* Staff Table */}
        <div className="card">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Working days</th>
                  <th>Work schedule</th>
                </tr>
              </thead>
              <tbody>
                {currentStaff.map((staff, index) => (
                  <tr key={staff.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                    </td>
                    <td>
                      <div className="flex items-center">
                        <div className={`avatar mr-3 ${getAvatarColor(index)}`}>
                          {staff.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{staff.name}</div>
                          <div className="text-sm text-gray-500">Optician</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-600">{staff.phone}</td>
                    <td className="text-gray-600">{staff.email}</td>
                    <td>
                      <div className="working-days">
                        {staff.workingDays.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`working-day ${
                              staff.activeWorkingDays.includes(dayIndex)
                                ? dayIndex === 0 || dayIndex === 6
                                  ? 'sunday'
                                  : 'monday'
                                : 'sunday'
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`status-badge ${
                          staff.schedule === 'Full Time' ? 'status-full-time' : 'status-part-time'
                        }`}
                      >
                        {staff.schedule}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default StaffPage