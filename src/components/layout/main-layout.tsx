'use client'

import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout