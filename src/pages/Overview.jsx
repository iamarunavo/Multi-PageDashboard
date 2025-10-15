import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import EarningsChart from '../components/charts/EarningsChart';
import TaskTypesChart from '../components/charts/TaskTypesChart';
import { cn } from '../utils/cn';

const StatCard = ({ title, value, subtitle, icon, trend, trendValue, delay = 0, cardColor = 'default' }) => {
  const getCardStyles = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 border-l-4 border-l-electric-blue-500';
      case 'green': 
        return 'bg-gradient-to-br from-success-50 to-lime-50 border-l-4 border-l-success-500';
      case 'yellow':
        return 'bg-gradient-to-br from-warning-50 to-warning-100 border-l-4 border-l-warning-500';
      case 'purple':
        return 'bg-gradient-to-br from-electric-blue-50 to-nova-gray-50 border-l-4 border-l-electric-blue-600';
      default:
        return 'bg-background-primary';
    }
  };

  const getIconStyles = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-electric-blue-500';
      case 'green': 
        return 'bg-success-500';
      case 'yellow':
        return 'bg-warning-500';
      case 'purple':
        return 'bg-electric-blue-600';
      default:
        return 'bg-gradient-nova';
    }
  };

  return (
    <Card 
      variant="default" 
      className={cn("hover-lift", delay > 0 && "animate-slide-in")}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn("p-6", getCardStyles(cardColor))}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="nova-caption text-text-tertiary mb-2 uppercase tracking-wide">{title}</p>
            <p className="nova-heading-1 font-bold text-text-primary nova-mono">{value}</p>
            {subtitle && (
              <p className="nova-caption text-text-secondary mt-2">{subtitle}</p>
            )}
          </div>
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-nova-sm", getIconStyles(cardColor))}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center">
            <div className={cn(
              "flex items-center space-x-1 px-2 py-1 rounded-full",
              trend === 'up' ? 'bg-success-100 text-success-700' : 
              trend === 'down' ? 'bg-error-100 text-error-700' : 'bg-background-secondary text-text-tertiary'
            )}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={trend === 'up' ? "M7 17l10-10M17 7H7v10" : 
                     trend === 'down' ? "M17 17L7 7m10 0H7v10" : "M9 12l2 2 4-4"} 
                />
              </svg>
              <span className="nova-caption font-medium">{trendValue}</span>
            </div>
            <span className="nova-caption text-text-tertiary ml-2">vs last month</span>
          </div>
        )}
      </div>
    </Card>
  );
};

const ActivityItem = ({ activity, index = 0 }) => {
  const getStatusIcon = (type) => {
    const baseClasses = "w-10 h-10 rounded-xl flex items-center justify-center shadow-nova-xs";
    
    switch (type) {
      case 'project_completed':
        return (
          <div className={cn(baseClasses, "bg-success-100")}>
            <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'payment_received':
        return (
          <div className={cn(baseClasses, "bg-lime-100")}>
            <svg className="w-5 h-5 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'deadline_approaching':
        return (
          <div className={cn(baseClasses, "bg-warning-100")}>
            <svg className="w-5 h-5 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'client_message':
        return (
          <div className={cn(baseClasses, "bg-electric-blue-100")}>
            <svg className="w-5 h-5 text-electric-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className={cn(baseClasses, "bg-background-secondary")}>
            <svg className="w-5 h-5 text-text-tertiary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div 
      className={cn(
        "flex items-start space-x-4 p-4 hover:bg-background-secondary transition-all duration-200 cursor-pointer rounded-lg animate-slide-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {getStatusIcon(activity.type)}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="nova-body-sm font-medium text-text-primary">{activity.title}</p>
            <p className="nova-caption text-text-secondary mt-1 line-clamp-2">{activity.description}</p>
          </div>
          <Badge variant={activity.priority || 'default'} size="sm" className="ml-3 flex-shrink-0">
            {activity.status}
          </Badge>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="nova-caption text-text-tertiary">{activity.timestamp}</span>
          {activity.amount && (
            <span className="nova-mono-sm font-semibold text-success-600">{activity.amount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  // Mock recent activity data
  const recentActivity = [
    {
      id: 1,
      type: 'project_completed',
      title: 'E-commerce Website Complete',
      description: 'Successfully delivered the full-stack e-commerce platform for TechCorp',
      timestamp: '2 hours ago',
      status: 'Completed',
      priority: 'success',
      amount: '$4,500'
    },
    {
      id: 2,
      type: 'payment_received',
      title: 'Payment Received',
      description: 'Invoice #1234 has been paid by Digital Solutions Inc.',
      timestamp: '5 hours ago',
      status: 'Paid',
      priority: 'success',
      amount: '$2,800'
    },
    {
      id: 3,
      type: 'deadline_approaching',
      title: 'Deadline Alert',
      description: 'Mobile app development project deadline is approaching in 3 days',
      timestamp: '1 day ago',
      status: 'Urgent',
      priority: 'warning'
    },
    {
      id: 4,
      type: 'client_message',
      title: 'New Client Message',
      description: 'Sarah Johnson sent you a message about the React dashboard project',
      timestamp: '2 days ago',
      status: 'New',
      priority: 'info'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in h-full overflow-y-auto">
      {/* Page Header */}
      <div className="animate-slide-in">
        <h1 className="nova-heading-1 text-text-primary">Dashboard Overview</h1>
        <p className="nova-body text-text-secondary mt-2">
          Welcome back! Here's what's happening with your freelance business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="ACTIVE PROJECTS"
          value="8"
          subtitle="2 new this week"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          trend="up"
          delay={100}
          trendValue="+2 this month"
          cardColor="blue"
        />
        
        <StatCard
          title="TOTAL EARNINGS"
          value="$45,680"
          subtitle="$8,900 this month"
          delay={200}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
          trend="up"
          trendValue="+12.5%"
          cardColor="green"
        />
        
        <StatCard
          title="TASKS DUE"
          value="5"
          subtitle="2 overdue"
          delay={300}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
          trend="down"
          trendValue="-3 this week"
          cardColor="yellow"
        />
        
        <StatCard
          title="CLIENT RATING"
          value="98%"
          subtitle="4.9/5 average"
          delay={400}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          }
          trend="up"
          trendValue="+2%"
          cardColor="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <Card className="animate-slide-in" style={{ animationDelay: '500ms' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="nova-heading-3 text-text-primary">Earnings Overview</h3>
                <Badge variant="outline">Last 6 Months</Badge>
              </div>
              <EarningsChart />
            </div>
          </Card>
        </div>

        {/* Task Distribution */}
        <div>
          <Card className="animate-slide-in" style={{ animationDelay: '600ms' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="nova-heading-3 text-text-primary">Task Types</h3>
                <Badge variant="outline">This Month</Badge>
              </div>
              <TaskTypesChart />
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="animate-slide-in" style={{ animationDelay: '700ms' }}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="nova-heading-3 text-text-primary">Recent Activity</h3>
            <Badge variant="outline" className="text-xs">
              {recentActivity.length} updates
            </Badge>
          </div>
          
          <div className="space-y-1">
            {recentActivity.map((activity, index) => (
              <ActivityItem 
                key={activity.id} 
                activity={activity} 
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-border-light">
            <button className="w-full nova-body-sm text-electric-blue-600 hover:text-electric-blue-700 font-medium transition-colors duration-200 py-2">
              View all activity
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Overview;
