import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: 'success',
    title: 'Project Completed',
    message: 'E-commerce website project has been completed successfully',
    time: '2 minutes ago',
    isRead: false,
    priority: 'high',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 2,
    type: 'warning',
    title: 'Deadline Approaching',
    message: 'Mobile app project deadline is in 3 days',
    time: '1 hour ago',
    isRead: false,
    priority: 'medium',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    type: 'info',
    title: 'New Message',
    message: 'You have received a new message from client Sarah Johnson',
    time: '3 hours ago',
    isRead: true,
    priority: 'low',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    id: 4,
    type: 'success',
    title: 'Payment Received',
    message: 'Invoice #1234 has been paid ($2,500)',
    time: '5 hours ago',
    isRead: true,
    priority: 'medium',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const Header = ({ onMenuClick }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const unreadCount = mockNotifications.filter(n => !n.isRead).length;

  return (
    <header className="bg-background-primary border-b border-border-light px-6 py-4 flex-shrink-0 relative z-header">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button and page info */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-background-secondary transition-all duration-200 hover-scale text-text-tertiary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="animate-slide-in">
            <h1 className="nova-heading-2 text-text-primary font-semibold">
              Dashboard
            </h1>
            <p className="nova-caption text-text-secondary mt-0.5">
              Welcome back, John • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </p>
          </div>
        </div>
        
        {/* Right side - Actions and notifications */}
        <div className="flex items-center space-x-2">
          {/* Quick actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search */}
            <button className="p-2 rounded-lg hover:bg-background-secondary transition-all duration-200 hover-scale text-text-tertiary hover:text-text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Quick add */}
            <button className="p-2 rounded-lg hover:bg-background-secondary transition-all duration-200 hover-scale text-text-tertiary hover:text-text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          
          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className={cn(
                "relative p-2 rounded-lg transition-all duration-200 hover-scale",
                "hover:bg-background-secondary text-text-tertiary hover:text-text-primary",
                isNotificationOpen && "bg-background-secondary text-text-primary"
              )}
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              
              {/* Notification badge */}
              {unreadCount > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full flex items-center justify-center",
                  "nova-caption font-semibold text-white animate-pulse-gentle",
                  unreadCount > 9 ? "bg-error-500" : "bg-electric-blue-500"
                )}>
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
            
            {/* Notification dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-background-primary rounded-xl shadow-nova-xl border border-border-light z-dropdown animate-scale-in">
                {/* Header */}
                <div className="px-4 py-3 border-b border-border-light">
                  <div className="flex items-center justify-between">
                    <h3 className="nova-body-sm font-semibold text-text-primary">Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="nova-caption text-electric-blue-600 hover:text-electric-blue-700 transition-colors duration-200">
                        Mark all read
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Notifications list */}
                <div className="max-h-96 overflow-y-auto">
                  {mockNotifications.length > 0 ? (
                    mockNotifications.map((notification, index) => (
                      <div
                        key={notification.id}
                        className={cn(
                          "px-4 py-3 border-b border-border-light hover:bg-background-secondary transition-all duration-200 cursor-pointer last:border-b-0 relative",
                          !notification.isRead && "bg-electric-blue-50 hover:bg-electric-blue-100"
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Unread indicator */}
                        {!notification.isRead && (
                          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-electric-blue-500 rounded-full"></div>
                        )}
                        
                        <div className={cn("flex items-start space-x-3", !notification.isRead && "ml-3")}>
                          <div className={cn(
                            "flex-shrink-0 mt-0.5 p-1.5 rounded-lg",
                            notification.type === 'success' && "bg-success-100 text-success-600",
                            notification.type === 'warning' && "bg-warning-100 text-warning-600",
                            notification.type === 'info' && "bg-electric-blue-100 text-electric-blue-600",
                            notification.type === 'error' && "bg-error-100 text-error-600"
                          )}>
                            {notification.icon}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="nova-body-sm font-medium text-text-primary">
                                  {notification.title}
                                </p>
                                <p className="nova-caption text-text-secondary mt-0.5 line-clamp-2">
                                  {notification.message}
                                </p>
                              </div>
                              
                              <span className="nova-caption text-text-tertiary whitespace-nowrap">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <svg className="w-8 h-8 text-text-tertiary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <p className="nova-caption text-text-secondary">No notifications</p>
                    </div>
                  )}
                </div>
                
                {/* Footer */}
                <div className="px-4 py-3 border-t border-border-light">
                  <button className="w-full nova-caption text-electric-blue-600 hover:text-electric-blue-700 font-medium transition-colors duration-200">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* User menu */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-nova rounded-full flex items-center justify-center shadow-nova-xs hover-scale cursor-pointer">
              <span className="text-white text-xs font-medium">JD</span>
            </div>
            <div className="hidden md:block">
              <p className="nova-body-sm font-medium text-text-primary">John Doe</p>
              <p className="nova-caption text-text-secondary">Senior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
