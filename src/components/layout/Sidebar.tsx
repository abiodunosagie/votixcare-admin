'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Calendar,
  Users,
  Stethoscope,
  Users2,
  Settings,
  UserCircle,
  FileText,
  Building
} from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
    },
    {
      name: 'Appointments',
      href: '/appointments',
      icon: Calendar,
    },
    {
      name: 'Patients',
      href: '/patients',
      icon: Users,
    },
    {
      name: 'Treatments',
      href: '/treatments',
      icon: Stethoscope,
    },
    {
      name: 'Staff',
      href: '/staff',
      icon: Users2,
    }
  ]

  const settings = [
    {
      name: 'Account',
      href: '/account',
      icon: UserCircle,
    },
    {
      name: 'Report and insight',
      href: '/reports',
      icon: FileText,
    },
    {
      name: 'Treatments',
      href: '/treatments-config',
      icon: Stethoscope,
    }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="flex items-center">
          <Building className="w-6 h-6 text-green-500 mr-2" />
          <div>
            <div className="sidebar-logo">VotixCare</div>
            <div className="sidebar-subtitle">VotixCare Dental Clinic</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="nav-section">
          <div className="nav-section-title">Settings</div>
          {settings.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar