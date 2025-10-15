import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { cn } from '../../utils/cn';
import { mockTaskTypesData } from '../../data/mockData';

const TaskTypesChart = ({ data = mockTaskTypesData, className, showLegend = true, animated = true }) => {
  const [animationData, setAnimationData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Nova Ledger color palette for task types
  const COLORS = {
    'Development': '#3B82F6',    // Electric blue
    'Design': '#10B981',         // Success green  
    'Consulting': '#F59E0B',     // Warning orange
    'Maintenance': '#6366F1',    // Indigo
    'Research': '#8B5CF6',       // Purple
    'Testing': '#EC4899',        // Pink
    'Documentation': '#06B6D4',  // Cyan
    'Other': '#9CA3AF'          // Gray
  };

  useEffect(() => {
    if (animated) {
      // Animate pie chart appearance
      const timer = setTimeout(() => {
        setAnimationData(data);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setAnimationData(data);
    }
  }, [data, animated]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const taskType = item.name;
      const count = item.value;
      const percentage = item.payload.percentage;
      
      return (
        <div className="bg-background-primary p-4 rounded-xl shadow-nova-lg border border-border animate-scale-in backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[taskType] || COLORS.Other }}
              />
              <p className="nova-heading-4">{taskType}</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center gap-4">
                <span className="nova-caption">COUNT</span>
                <span className="nova-mono font-semibold text-text-primary">{count} tasks</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="nova-caption">PERCENTAGE</span>
                <span className="nova-mono font-semibold text-text-primary">{percentage}%</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="grid grid-cols-2 gap-3 mt-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        {payload.map((entry, index) => {
          const taskData = data.find(item => item.type === entry.value);
          return (
            <div 
              key={`item-${index}`} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-background-tertiary transition-colors duration-200 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="nova-body-sm font-medium text-text-primary">{entry.value}</span>
              </div>
              <div className="text-right">
                <p className="nova-mono text-sm font-semibold text-text-primary">{taskData?.count || 0}</p>
                <p className="nova-caption">{taskData?.percentage || 0}%</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  // Calculate totals for summary
  const totalTasks = data.reduce((acc, item) => acc + item.count, 0);
  const mostCommonTask = data.reduce((prev, current) => (prev.count > current.count) ? prev : current);

  return (
    <div className={cn('nova-chart-container', className)}>
      <div className="h-80 animate-fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {Object.entries(COLORS).map(([key, color], index) => (
                <linearGradient key={key} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={1} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.8} />
                </linearGradient>
              ))}
            </defs>
            
            <Pie
              data={animationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={animated ? 90 : 90}
              innerRadius={20} // Donut style
              fill="#8884d8"
              dataKey="count"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              className="transition-all duration-300"
            >
              {animationData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.type] || COLORS.Other}
                  stroke={activeIndex === index ? '#FFFFFF' : 'transparent'}
                  strokeWidth={activeIndex === index ? 3 : 0}
                  style={{
                    filter: activeIndex === null || activeIndex === index ? 'brightness(1)' : 'brightness(0.7)',
                    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'center',
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            {showLegend && <Legend content={<CustomLegend />} />}
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Chart Summary */}
      <div className="mt-6 pt-4 border-t border-border-light animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="flex justify-between items-center">
          <div>
            <p className="nova-caption mb-1">TOTAL TASKS</p>
            <p className="nova-mono-xl font-semibold text-text-primary">{totalTasks}</p>
          </div>
          
          <div className="text-right">
            <p className="nova-caption mb-1">MOST COMMON</p>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: COLORS[mostCommonTask.type] || COLORS.Other }}
              />
              <p className="nova-body-sm font-medium text-text-primary">{mostCommonTask.type}</p>
              <span className="nova-mono text-sm text-text-tertiary">({mostCommonTask.percentage}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTypesChart;
