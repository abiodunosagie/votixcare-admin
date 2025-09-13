'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  LayoutDashboard,
  Calendar,
  Users,
  ClipboardList,
  UserCog,
  Settings,
  BarChart,
  LogOut
} from 'lucide-react'

type SidebarItem = {
  title: string
  href: string
  icon: React.ReactNode
}

type SidebarSection = {
  title: string
  items: SidebarItem[]
}

const Sidebar = () => {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const sidebarSections: SidebarSection[] = [
    {
      title: 'Clinic',
      items: [
        {
          title: 'Dashboard',
          href: '/dashboard',
          icon: <LayoutDashboard size={20} />,
        },
        {
          title: 'Appointments',
          href: '/appointments',
          icon: <Calendar size={20} />,
        },
        {
          title: 'Patients',
          href: '/patients',
          icon: <Users size={20} />,
        },
        {
          title: 'Treatments',
          href: '/treatments',
          icon: <ClipboardList size={20} />,
        },
        {
          title: 'Staff',
          href: '/staff',
          icon: <UserCog size={20} />,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Account',
          href: '/account',
          icon: <Settings size={20} />,
        },
        {
          title: 'Report and Insight',
          href: '/reports',
          icon: <BarChart size={20} />,
        },
      ],
    },
  ]

  return (
    <aside className="flex flex-col w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Link href="/dashboard" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image
              src="/images/logo-light.svg"
              alt="VotixCare Logo"
              fill
              className="dark:hidden"
            />
            <Image
              src="/images/logo-dark.svg"
              alt="VotixCare Logo"
              fill
              className="hidden dark:block"
            />
          </div>
          <span className="text-xl font-semibold text-primary dark:text-white">VotixCare</span>
        </Link>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Link href="/profile" className="flex items-center">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image
              src="/avatars/avatar-1.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">VotixCare Dental Clinic</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {sidebarSections.map((section, i) => (
          <div key={i} className="mb-6">
            <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {section.title}
            </h3>
            <nav className="space-y-1">
              {section.items.map((item, j) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={j}
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary bg-opacity-10 text-primary dark:text-primary-light'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className={`mr-3 ${isActive ? 'text-primary dark:text-primary-light' : ''}`}>
                      {item.icon}
                    </span>
                    {item.title}
                  </Link>
                )
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 w-full">
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar