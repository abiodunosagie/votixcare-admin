'use client'

import { Search, Settings, HelpCircle, Bell, ChevronDown } from 'lucide-react'

interface HeaderProps {
  title: string
  icon?: React.ReactNode
}

const Header = ({ title, icon }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="breadcrumb">
          {icon && <div className="breadcrumb-icon">{icon}</div>}
          {title}
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <Settings className="header-icon" />
        <HelpCircle className="header-icon" />
        <Bell className="header-icon" />

        <div className="user-info">
          <img
            src="/avatars/avatar-1.svg"
            alt="Jessica Adams"
            className="user-avatar"
          />
          <div>
            <div className="user-name">Jessica Adams</div>
            <div className="user-role">Admin</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default Header