import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Tasks = () => {
  const mockTasks = [
    {
      id: 1,
      title: 'Complete E-commerce Dashboard',
      project: 'TechCorp Solutions',
      priority: 'high',
      status: 'In Progress',
      dueDate: 'Oct 16, 2025',
      progress: 75,
      assignee: 'John Doe',
      description: 'Finish the analytics dashboard for the e-commerce platform'
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      project: 'StartupXYZ',
      priority: 'medium',
      status: 'Review',
      dueDate: 'Oct 18, 2025',
      progress: 90,
      assignee: 'John Doe',
      description: 'Create responsive mobile interface designs'
    },
    {
      id: 3,
      title: 'API Documentation',
      project: 'Digital Innovations',
      priority: 'low',
      status: 'Todo',
      dueDate: 'Oct 22, 2025',
      progress: 20,
      assignee: 'John Doe',
      description: 'Document REST API endpoints and usage'
    },
    {
      id: 4,
      title: 'Database Optimization',
      project: 'Enterprise Global',
      priority: 'high',
      status: 'In Progress',
      dueDate: 'Oct 15, 2025',
      progress: 45,
      assignee: 'John Doe',
      description: 'Optimize database queries for better performance'
    },
    {
      id: 5,
      title: 'User Testing Setup',
      project: 'TechCorp Solutions',
      priority: 'medium',
      status: 'Completed',
      dueDate: 'Oct 12, 2025',
      progress: 100,
      assignee: 'John Doe',
      description: 'Set up user testing environment and protocols'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'info';
      case 'Review': return 'warning';
      case 'Todo': return 'outline';
      default: return 'outline';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in h-full">
      {/* Page Header */}
      <div className="animate-slide-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="nova-heading-1 text-text-primary">Tasks</h1>
            <p className="nova-body text-text-secondary mt-2">
              Track and manage your project tasks and deliverables.
            </p>
          </div>
          <button className="nova-button nova-button-primary">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Task
          </button>
        </div>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="animate-slide-in bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 border-l-4 border-l-electric-blue-500" style={{ animationDelay: '100ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-electric-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">5</p>
            <p className="nova-caption text-text-secondary uppercase tracking-wide">Total Tasks</p>
          </div>
        </Card>

        <Card className="animate-slide-in bg-gradient-to-br from-warning-50 to-warning-100 border-l-4 border-l-warning-500" style={{ animationDelay: '200ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-warning-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">2</p>
            <p className="nova-caption text-text-secondary uppercase tracking-wide">In Progress</p>
          </div>
        </Card>

        <Card className="animate-slide-in bg-gradient-to-br from-electric-blue-50 to-nova-gray-50 border-l-4 border-l-electric-blue-600" style={{ animationDelay: '300ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-electric-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">1</p>
            <p className="nova-caption text-text-secondary uppercase tracking-wide">In Review</p>
          </div>
        </Card>

        <Card className="animate-slide-in bg-gradient-to-br from-success-50 to-lime-50 border-l-4 border-l-success-500" style={{ animationDelay: '400ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">1</p>
            <p className="nova-caption text-text-secondary uppercase tracking-wide">Completed</p>
          </div>
        </Card>
      </div>

      {/* Task List */}
      <Card className="animate-slide-in bg-gradient-to-r from-background-primary to-nova-gray-50/30" style={{ animationDelay: '500ms' }}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="nova-heading-3 text-text-primary">Task List</h3>
            <div className="flex space-x-2">
              <button className="nova-button nova-button-ghost nova-button-sm">Filter</button>
              <button className="nova-button nova-button-ghost nova-button-sm">Sort</button>
            </div>
          </div>

          <div className="space-y-4">
            {mockTasks.map((task, index) => (
              <div 
                key={task.id}
                className="border border-border-light rounded-lg p-4 hover:bg-background-secondary transition-all duration-200 cursor-pointer animate-slide-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="nova-body font-semibold text-text-primary mb-1">{task.title}</h4>
                        <p className="nova-caption text-text-secondary">{task.project}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(task.priority)} size="sm">
                          {task.priority}
                        </Badge>
                        <Badge variant={getStatusColor(task.status)} size="sm">
                          {task.status}
                        </Badge>
                      </div>
                    </div>

                    <p className="nova-caption text-text-secondary mb-3">{task.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="nova-caption text-text-tertiary">Due {task.dueDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="nova-caption text-text-tertiary">{task.assignee}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-background-secondary rounded-full h-2">
                            <div 
                              className="h-2 bg-electric-blue-500 rounded-full transition-all duration-300"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="nova-caption font-medium text-text-primary">{task.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Tasks;