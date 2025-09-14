'use client'

import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface MainLayoutProps {
  children: React.ReactNode
  title?: string
  icon?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = 'Dashboard', icon }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} icon={icon} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout