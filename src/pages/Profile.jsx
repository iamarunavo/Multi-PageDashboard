import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { mockProfile } from '../data/mockData';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockProfile.name,
    email: mockProfile.email,
    phone: mockProfile.phone,
    location: mockProfile.location,
    bio: mockProfile.bio,
    hourlyRate: mockProfile.hourlyRate,
    website: mockProfile.website,
    linkedin: mockProfile.linkedin,
    github: mockProfile.github,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to an API
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: mockProfile.name,
      email: mockProfile.email,
      phone: mockProfile.phone,
      location: mockProfile.location,
      bio: mockProfile.bio,
      hourlyRate: mockProfile.hourlyRate,
      website: mockProfile.website,
      linkedin: mockProfile.linkedin,
      github: mockProfile.github,
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="nova-heading-1">Profile Settings</h1>
          <p className="nova-body text-gray-600 mt-2">
            Manage your profile information and preferences.
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-nova rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">
                  {mockProfile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {isEditing ? (
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-center text-xl font-semibold"
                  />
                ) : (
                  formData.name
                )}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {isEditing ? (
                  <Input
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-center"
                  />
                ) : (
                  formData.email
                )}
              </p>
              
              <div className="flex justify-center mb-4">
                <Badge variant={mockProfile.availability === 'Available' ? 'success' : 'warning'}>
                  {mockProfile.availability}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-medium">{mockProfile.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hourly Rate:</span>
                  <span className="font-medium">${mockProfile.hourlyRate}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span>Timezone:</span>
                  <span className="font-medium">{mockProfile.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Joined:</span>
                  <span className="font-medium">
                    {new Date(mockProfile.joinDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockProfile.skills.map((skill, index) => (
                  <Badge key={index} variant="info">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
                <Input
                  label="Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="nova-input min-h-[100px] resize-none"
                    rows={4}
                  />
                ) : (
                  <p className="nova-body text-gray-700 p-3 bg-gray-50 rounded-lg">
                    {formData.bio}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Hourly Rate"
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  disabled={!isEditing}
                  icon="$"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Badge variant="success">Available</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                disabled={!isEditing}
                placeholder="https://yourwebsite.com"
              />
              <Input
                label="LinkedIn"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                disabled={!isEditing}
                placeholder="https://linkedin.com/in/yourprofile"
              />
              <Input
                label="GitHub"
                value={formData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                disabled={!isEditing}
                placeholder="https://github.com/yourusername"
              />
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </div>
                <Button variant="secondary" size="sm">
                  Change Password
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <Button variant="secondary" size="sm">
                  Enable 2FA
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <h4 className="text-sm font-medium text-red-900">Delete Account</h4>
                  <p className="text-sm text-red-600">Permanently delete your account</p>
                </div>
                <Button variant="danger" size="sm">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
