import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Clients = () => {
  const mockClients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      contact: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      projects: 3,
      status: 'Active',
      totalValue: '$12,500',
      lastContact: '2 days ago'
    },
    {
      id: 2,
      name: 'Digital Innovations',
      contact: 'Mike Chen',
      email: 'mike@digitalinnovations.com',
      projects: 2,
      status: 'Active',
      totalValue: '$8,900',
      lastContact: '1 week ago'
    },
    {
      id: 3,
      name: 'StartupXYZ',
      contact: 'Emma Wilson',
      email: 'emma@startupxyz.com',
      projects: 1,
      status: 'Completed',
      totalValue: '$5,200',
      lastContact: '2 weeks ago'
    },
    {
      id: 4,
      name: 'Enterprise Global',
      contact: 'David Brown',
      email: 'david@enterpriseglobal.com',
      projects: 4,
      status: 'Active',
      totalValue: '$18,750',
      lastContact: '3 days ago'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in h-full">
      {/* Page Header */}
      <div className="animate-slide-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="nova-heading-1 text-text-primary">Clients</h1>
            <p className="nova-body text-text-secondary mt-2">
              Manage your client relationships and project collaborations.
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            {mockClients.length} Total Clients
          </Badge>
        </div>
      </div>

      {/* Client Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="animate-slide-in" style={{ animationDelay: '100ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">3</p>
            <p className="nova-caption text-text-secondary">Active Clients</p>
          </div>
        </Card>

        <Card className="animate-slide-in" style={{ animationDelay: '200ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-electric-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-electric-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">$45,350</p>
            <p className="nova-caption text-text-secondary">Total Value</p>
          </div>
        </Card>

        <Card className="animate-slide-in" style={{ animationDelay: '300ms' }}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="nova-mono-lg font-semibold text-text-primary">98%</p>
            <p className="nova-caption text-text-secondary">Satisfaction</p>
          </div>
        </Card>
      </div>

      {/* Client List */}
      <Card className="animate-slide-in" style={{ animationDelay: '400ms' }}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="nova-heading-3 text-text-primary">Client Directory</h3>
            <button className="nova-button nova-button-primary nova-button-sm">
              Add New Client
            </button>
          </div>

          <div className="space-y-4">
            {mockClients.map((client, index) => (
              <div 
                key={client.id}
                className="flex items-center justify-between p-4 hover:bg-background-secondary rounded-lg transition-all duration-200 cursor-pointer"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-nova rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="nova-body font-semibold text-text-primary">{client.name}</h4>
                    <p className="nova-caption text-text-secondary">{client.contact} • {client.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="nova-mono-sm font-semibold text-text-primary">{client.projects}</p>
                    <p className="nova-caption text-text-secondary">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="nova-mono-sm font-semibold text-success-600">{client.totalValue}</p>
                    <p className="nova-caption text-text-secondary">Total Value</p>
                  </div>
                  <div className="text-center">
                    <Badge 
                      variant={client.status === 'Active' ? 'success' : 'outline'}
                      size="sm"
                    >
                      {client.status}
                    </Badge>
                    <p className="nova-caption text-text-tertiary mt-1">{client.lastContact}</p>
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

export default Clients;