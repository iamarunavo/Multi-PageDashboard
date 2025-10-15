import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { mockStats } from '../../data/mockData';

const navigationItems = [
  {
    name: 'Overview',
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H10a2 2 0 01-2-2V5z" />
      </svg>
    ),
    badge: null,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    badge: mockStats.activeProjects,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    badge: null,
  },
  {
    name: 'Clients',
    href: '/clients',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badge: 4,
  },
  {
    name: 'Tasks',
    href: '/tasks',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    badge: mockStats.tasksDue,
    warning: mockStats.overdueTasks > 0,
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    badge: null,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background-overlay backdrop-blur-sm z-dropdown md:hidden animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        'flex-shrink-0 bg-background-primary border-r border-border-light',
        'transition-all duration-300 ease-nova flex flex-col h-full',
        // Mobile behavior
        'fixed inset-y-0 left-0 z-fixed shadow-nova-lg md:shadow-none',
        'md:relative md:z-auto',
        isCollapsed ? 'w-16' : 'w-64',
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}>
        {/* Header */}
        <div className={cn(
          'flex items-center h-16 px-6 border-b border-border-light flex-shrink-0',
          isCollapsed ? 'justify-center px-4' : 'justify-between'
        )}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-nova rounded-lg flex items-center justify-center shadow-nova-xs">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            {!isCollapsed && (
              <span className="nova-heading-3 text-text-primary font-bold tracking-tight">
                Nova Ledger
              </span>
            )}
          </div>
          
          {/* Collapse button - desktop only */}
          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded-md hover:bg-background-tertiary transition-colors duration-200 text-text-tertiary hover:text-text-primary"
              aria-label="Toggle sidebar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Navigation */}
        <nav className={cn(
          'flex-1 py-6 space-y-1 overflow-y-auto',
          isCollapsed ? 'px-2' : 'px-4'
        )}>
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center text-sm font-medium rounded-lg transition-all duration-250 group relative',
                  'hover:bg-background-tertiary hover:text-text-primary hover-lift',
                  isCollapsed ? 'px-3 py-3 justify-center' : 'px-3 py-2.5',
                  isActive 
                    ? 'bg-electric-blue-500 text-white shadow-blue hover:bg-electric-blue-600' 
                    : 'text-text-secondary hover:text-text-primary'
                )}
                onClick={() => window.innerWidth < 768 && onClose()}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={cn(
                  'transition-all duration-250 flex-shrink-0',
                  isCollapsed ? 'mr-0' : 'mr-3',
                  isActive ? 'text-white' : 'text-text-tertiary group-hover:text-text-primary'
                )}>
                  {item.icon}
                </span>
                
                {!isCollapsed && (
                  <>
                    <span className="flex-1 truncate">{item.name}</span>
                    {item.badge && (
                      <span className={cn(
                        'ml-2 px-2 py-0.5 rounded-full text-xs font-medium flex items-center justify-center min-w-5',
                        item.warning
                          ? 'bg-error-100 text-error-700 border border-error-200'
                          : isActive
                          ? 'bg-white bg-opacity-20 text-white'
                          : 'bg-background-secondary text-text-tertiary'
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className={cn(
                    'absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2',
                    'bg-obsidian-900 text-white text-sm rounded-lg shadow-nova-lg',
                    'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
                    'transition-all duration-200 z-tooltip whitespace-nowrap'
                  )}>
                    {item.name}
                    {item.badge && (
                      <span className="ml-2 px-1.5 py-0.5 bg-white bg-opacity-20 rounded text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
        
        {/* Quick Stats */}
        {!isCollapsed && (
          <div className="px-4 py-4 border-t border-border-light">
            <div className="space-y-3">
              <h4 className="nova-caption">QUICK STATS</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="nova-mono-sm font-semibold text-text-primary">${(mockStats.monthlyEarnings / 1000).toFixed(0)}k</p>
                  <p className="nova-caption">THIS MONTH</p>
                </div>
                <div className="text-center">
                  <p className="nova-mono-sm font-semibold text-success-600">{mockStats.clientSatisfaction}%</p>
                  <p className="nova-caption">SATISFACTION</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* User Profile */}
        <div className={cn(
          'border-t border-border-light',
          isCollapsed ? 'p-2' : 'p-4'
        )}>
          <div className={cn(
            'flex items-center transition-all duration-250',
            isCollapsed ? 'justify-center' : 'space-x-3'
          )}>
            <div className="w-8 h-8 bg-gradient-nova rounded-full flex items-center justify-center shadow-nova-xs">
              <span className="text-white text-xs font-medium">JD</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="nova-body-sm font-medium text-text-primary truncate">
                  John Doe
                </p>
                <p className="nova-caption truncate">
                  Freelance Developer
                </p>
              </div>
            )}
            
            {/* Settings button */}
            {!isCollapsed && (
              <button className="p-1.5 rounded-md hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Expand button for collapsed state */}
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="hidden md:flex w-full justify-center mt-2 p-1.5 rounded-md hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors duration-200"
              aria-label="Expand sidebar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
