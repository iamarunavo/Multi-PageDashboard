import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { cn } from '../../utils/cn';
import { mockEarningsData } from '../../data/mockData';

const EarningsChart = ({ data = mockEarningsData, className, showStats = true, animated = true }) => {
  const [animationData, setAnimationData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (animated) {
      // Animate bars in sequence
      const timer = setTimeout(() => {
        setAnimationData(data);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimationData(data);
    }
  }, [data, animated]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const currentIndex = data.findIndex(item => item.month === label);
      const previousValue = currentIndex > 0 ? data[currentIndex - 1].amount : null;
      
      let trend = null;
      if (previousValue) {
        const change = ((value - previousValue) / previousValue * 100);
        trend = {
          value: change,
          direction: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
          icon: change > 0 ? '↗' : change < 0 ? '↘' : '→',
          color: change > 0 ? 'text-success-600' : change < 0 ? 'text-error-600' : 'text-text-tertiary'
        };
      }

      return (
        <div className="bg-background-primary p-4 rounded-xl shadow-nova-lg border border-border animate-scale-in backdrop-blur-sm">
          <div className="space-y-2">
            <p className="nova-caption">EARNINGS</p>
            <p className="nova-heading-4">{label} 2024</p>
            <p className="nova-mono-xl font-semibold text-text-primary">
              ${value.toLocaleString()}
            </p>
            {trend && (
              <div className={`flex items-center gap-1 ${trend.color}`}>
                <span className="text-sm">{trend.icon}</span>
                <span className="nova-mono text-sm font-medium">
                  {trend.value > 0 ? '+' : ''}{trend.value.toFixed(1)}% vs prev month
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomBar = (props) => {
    const { index, ...restProps } = props;
    const isHovered = hoveredIndex === index;
    
    return (
      <Bar 
        {...restProps}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    );
  };

  const getBarColor = (index) => {
    if (hoveredIndex === null) return '#3B82F6'; // Default electric blue
    return hoveredIndex === index ? '#2563EB' : '#93C5FD'; // Highlighted vs dimmed
  };

  // Calculate statistics
  const totalEarnings = data.reduce((acc, item) => acc + item.amount, 0);
  const averageEarnings = Math.round(totalEarnings / data.length);
  const highestEarning = Math.max(...data.map(item => item.amount));
  const lowestEarning = Math.min(...data.map(item => item.amount));
  const growth = data.length > 1 ? ((data[data.length - 1].amount - data[0].amount) / data[0].amount * 100) : 0;

  return (
    <div className={cn('nova-chart-container', className)}>
      <div className="h-80 animate-fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={animationData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#F3F4F6" 
              vertical={false}
              horizontalPoints={[]}
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 11, 
                fill: '#9CA3AF',
                fontFamily: 'Inter',
                fontWeight: 500
              }}
              tickMargin={8}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 11, 
                fill: '#9CA3AF',
                fontFamily: 'Roboto Mono',
                fontWeight: 400
              }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              tickMargin={12}
              width={60}
            />
            
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{
                fill: 'rgba(59, 130, 246, 0.1)',
                radius: 6
              }}
            />
            
            <Bar 
              dataKey="amount" 
              fill="url(#barGradient)"
              radius={[6, 6, 0, 0]}
              className="transition-all duration-250"
            >
              {animationData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(index)}
                  className="transition-all duration-250 hover:brightness-110"
                  onMouseEnter={() => setHoveredIndex(index)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Chart Statistics */}
      {showStats && (
        <div className="mt-6 pt-4 border-t border-border-light animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="nova-caption mb-1">TOTAL EARNINGS</p>
              <p className="nova-mono-lg font-semibold text-text-primary">
                ${totalEarnings.toLocaleString()}
              </p>
            </div>
            
            <div className="text-center">
              <p className="nova-caption mb-1">AVERAGE</p>
              <p className="nova-mono-lg font-semibold text-text-primary">
                ${averageEarnings.toLocaleString()}
              </p>
            </div>
            
            <div className="text-center">
              <p className="nova-caption mb-1">HIGHEST MONTH</p>
              <p className="nova-mono-lg font-semibold text-success-600">
                ${highestEarning.toLocaleString()}
              </p>
            </div>
            
            <div className="text-center">
              <p className="nova-caption mb-1">PERIOD GROWTH</p>
              <div className="flex items-center justify-center gap-1">
                <span className={`nova-mono-lg font-semibold ${growth >= 0 ? 'text-success-600' : 'text-error-600'}`}>
                  {growth >= 0 ? '+' : ''}{growth.toFixed(1)}%
                </span>
                <svg 
                  className={`w-4 h-4 ${growth >= 0 ? 'text-success-600 rotate-0' : 'text-error-600 rotate-180'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarningsChart;
