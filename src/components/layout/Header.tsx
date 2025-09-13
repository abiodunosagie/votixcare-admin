'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
  Bell,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react'

const Header = () => {
  const { setTheme, theme } = useTheme()
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                          <User size={20} />
                        </div>
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">New appointment</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">John Doe scheduled for 10:00 AM</p>
                        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/notifications"
                  className="text-sm text-primary dark:text-primary-light font-medium"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 pr-2"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="/avatars/avatar-1.svg"
                alt="Jessica Adams"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Jessica Adams</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
            <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700"></div>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header