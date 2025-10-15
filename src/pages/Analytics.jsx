import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Analytics = () => {
  return (
    <div className="space-y-8 animate-fade-in h-full">
      {/* Page Header */}
      <div className="animate-slide-in">
        <h1 className="nova-heading-1 text-text-primary">Analytics</h1>
        <p className="nova-body text-text-secondary mt-2">
          Track your performance and growth metrics across all projects.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="animate-slide-in hover-lift" style={{ animationDelay: '100ms' }}>
          <div className="p-8 bg-gradient-to-br from-lime-50 to-success-50 border-l-4 border-l-lime-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center shadow-nova-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="nova-heading-2 text-text-primary font-semibold">Revenue Growth</h3>
              </div>
              <Badge variant="success" className="text-sm font-bold">+25%</Badge>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="nova-caption text-text-tertiary mb-2">THIS MONTH</p>
                <p className="nova-heading-1 nova-mono font-bold text-lime-700">$8,900</p>
              </div>
              <div>
                <p className="nova-caption text-text-tertiary mb-2">LAST MONTH</p>
                <p className="nova-mono-lg font-semibold text-text-secondary">$7,120</p>
              </div>
              <div className="pt-4 border-t border-lime-200">
                <p className="nova-caption text-lime-700 font-medium">+$1,780 increase from last month</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="animate-slide-in hover-lift" style={{ animationDelay: '200ms' }}>
          <div className="p-8 bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 border-l-4 border-l-electric-blue-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-electric-blue-500 rounded-xl flex items-center justify-center shadow-nova-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="nova-heading-2 text-text-primary font-semibold">Client Retention</h3>
              </div>
              <Badge variant="info" className="text-sm font-bold bg-electric-blue-100 text-electric-blue-700">98%</Badge>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="nova-caption text-text-tertiary mb-2">ACTIVE CLIENTS</p>
                <p className="nova-heading-1 nova-mono font-bold text-electric-blue-700">24</p>
              </div>
              <div>
                <p className="nova-caption text-text-tertiary mb-2">RETURNING</p>
                <p className="nova-mono-lg font-semibold text-electric-blue-600">23</p>
              </div>
              <div className="pt-4 border-t border-electric-blue-200">
                <p className="nova-caption text-electric-blue-700 font-medium">Exceptional client loyalty rate</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="animate-slide-in hover-lift" style={{ animationDelay: '300ms' }}>
          <div className="p-8 bg-gradient-to-br from-success-50 to-lime-50 border-l-4 border-l-success-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center shadow-nova-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="nova-heading-2 text-text-primary font-semibold">Project Success</h3>
              </div>
              <Badge variant="success" className="text-sm font-bold">95%</Badge>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="nova-caption text-text-tertiary mb-2">ON TIME</p>
                <p className="nova-heading-1 nova-mono font-bold text-success-700">19/20</p>
              </div>
              <div>
                <p className="nova-caption text-text-tertiary mb-2">ON BUDGET</p>
                <p className="nova-mono-lg font-semibold text-success-600">18/20</p>
              </div>
              <div className="pt-4 border-t border-success-200">
                <p className="nova-caption text-success-700 font-medium">Outstanding delivery performance</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;