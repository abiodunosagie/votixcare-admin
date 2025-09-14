'use client'

const StaffList = () => {
  const staffMembers = [
    {
      name: 'Jessica Adams',
      role: 'Dentist',
      avatar: 'JA',
      color: 'bg-gray-800',
      status: 'active'
    },
    {
      name: 'May Simon',
      role: 'Dental hygienist',
      avatar: 'MS',
      color: 'bg-gray-800',
      status: 'active'
    },
    {
      name: 'Jessica Jessica',
      role: 'Dental assistant',
      avatar: 'JJ',
      color: 'bg-gray-800',
      status: 'active'
    },
    {
      name: 'Jessica Jessica',
      role: 'Dental assistant',
      avatar: 'JJ',
      color: 'bg-gray-800',
      status: 'active'
    },
    {
      name: 'Jessica Jessica',
      role: 'Office manager',
      avatar: 'JJ',
      color: 'bg-gray-800',
      status: 'active'
    }
  ]

  return (
    <div className="space-y-4">
      {staffMembers.map((member, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-white text-sm font-medium mr-3`}>
            {member.avatar}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{member.name}</div>
            <div className="text-xs text-gray-500">{member.role}</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      ))}

      <div className="pt-2 border-t border-gray-100">
        <button className="text-green-600 text-sm font-medium hover:text-green-700">
          See more →
        </button>
      </div>
    </div>
  )
}

export default StaffList