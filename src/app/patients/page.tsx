'use client'

import MainLayout from '@/components/layout/main-layout'
import { Users, Filter, Plus } from 'lucide-react'

const PatientsPage = () => {
  const patients = [
    {
      id: 1,
      name: 'Damola Doe',
      avatar: 'DD',
      gender: 'Male',
      age: 31,
      phone: '07067855350',
      email: 'damolauw@gmail.com',
      occupation: 'Consultant',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Refractive errors'
    },
    {
      id: 2,
      name: 'David Ryms',
      avatar: 'DR',
      gender: 'Male',
      age: 26,
      phone: '08054782876',
      email: 'davidryms@gmail.com',
      occupation: 'Civil Engineer',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Eye checkup'
    },
    {
      id: 3,
      name: 'Simon Bank',
      avatar: 'SB',
      gender: 'Male',
      age: 18,
      phone: '08163728638',
      email: 'simonbank@gmail.com',
      occupation: 'Lecturer',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Refractive errors'
    },
    {
      id: 4,
      name: 'Carlos Tez',
      avatar: 'CT',
      gender: 'Male',
      age: 54,
      phone: '08076357897',
      email: 'carlostez@gmail.com',
      occupation: 'Auditor',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Cataracts'
    },
    {
      id: 5,
      name: 'Lillian Voss',
      avatar: 'LV',
      gender: 'Female',
      age: 45,
      phone: '09152676367',
      email: 'lillianvoss@gmail.com',
      occupation: 'Driver',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Refractive errors'
    },
    {
      id: 6,
      name: 'Elias Mercer',
      avatar: 'EM',
      gender: 'Male',
      age: 31,
      phone: '07067855350',
      email: 'eliasmercer@gmail.com',
      occupation: 'Surgeon',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Myopia'
    },
    {
      id: 7,
      name: 'Rowan Ellis',
      avatar: 'RE',
      gender: 'Male',
      age: 30,
      phone: '07062836389',
      email: 'rowanellis@gmail.com',
      occupation: 'Consultant',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Refractive errors'
    },
    {
      id: 8,
      name: 'Emery Tate',
      avatar: 'ET',
      gender: 'Male',
      age: 35,
      phone: '07067855350',
      email: 'emerytate@gmail.com',
      occupation: 'Managing Director',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Glaucoma'
    },
    {
      id: 9,
      name: 'Quinn Lennox',
      avatar: 'QL',
      gender: 'Female',
      age: 54,
      phone: '08145725337',
      email: 'quinnlennox@gmail.com',
      occupation: 'Consultant',
      address: '3, Lane 5, Adeniji avenue, PH',
      lastTreatment: 'Cataracts'
    }
  ]

  const getAvatarColor = (index: number) => {
    const colors = [
      'bg-orange-500',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-red-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-pink-500',
      'bg-gray-800',
      'bg-indigo-500'
    ]
    return colors[index % colors.length]
  }

  return (
    <MainLayout title="Patients" icon={<Users />}>
      <div className="space-y-6">
        {/* Header with patient count and actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-6 h-6 text-gray-400 mr-2" />
            <span className="text-2xl font-bold text-gray-900">54</span>
            <span className="text-gray-500 ml-2">Total patients</span>
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

        {/* Patients Table */}
        <div className="card">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Patient name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Occupation</th>
                  <th>Address</th>
                  <th>Last treatment</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={patient.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                    </td>
                    <td>
                      <div className="flex items-center">
                        <div className={`avatar mr-3 ${getAvatarColor(index)}`}>
                          {patient.avatar}
                        </div>
                        <span className="font-medium text-gray-900">{patient.name}</span>
                      </div>
                    </td>
                    <td className="text-gray-600">{patient.gender}</td>
                    <td className="text-gray-600">{patient.age}</td>
                    <td className="text-gray-600">{patient.phone}</td>
                    <td className="text-gray-600">{patient.email}</td>
                    <td className="text-gray-600">{patient.occupation}</td>
                    <td className="text-gray-600">{patient.address}</td>
                    <td className="text-gray-600">{patient.lastTreatment}</td>
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

export default PatientsPage