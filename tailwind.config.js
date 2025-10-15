/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Nova Ledger Color Palette - Precision Through Minimalism
      colors: {
        // Core Brand Colors
        obsidian: {
          DEFAULT: '#0E0E10',
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#D9D9D9',
          300: '#C2C2C2',
          400: '#949494',
          500: '#666666',
          600: '#5C5C5C',
          700: '#3D3D3D',
          800: '#2E2E2E',
          900: '#0E0E10',
        },
        'cool-gray': '#1F2937',
        'cloud-white': '#F9FAFB',
        'electric-blue': {
          DEFAULT: '#3B82F6',
          50: '#EBF2FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'lime-tint': {
          DEFAULT: '#A7F3D0',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        
        // Extended Nova Grayscale System
        'nova-gray': {
          25: '#FEFEFE',
          50: '#FDFDFD',
          75: '#FAFAFA',
          100: '#F7F7F7',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#C7C7C7',
          500: '#A0A0A0',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          850: '#2A2A2A',
          900: '#171717',
          925: '#121212',
          950: '#0A0A0A',
        },
        
        // Semantic Colors with Precision
        success: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        error: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        info: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        
        // Nova Ledger Border System
        border: {
          DEFAULT: '#404040',
          light: '#2A2A2A',
          medium: '#525252',
          strong: '#737373',
          accent: '#3B82F6',
          subtle: '#171717',
        },
        
        // Background System
        background: {
          primary: '#0E0E10',
          secondary: '#171717', 
          tertiary: '#262626',
          elevated: '#1F1F23',
          overlay: 'rgba(0, 0, 0, 0.6)',
          glass: 'rgba(14, 14, 16, 0.8)',
        },
        
        // Text System
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          tertiary: '#737373',
          inverse: '#0E0E10',
          accent: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      
      // Nova Ledger Typography - Precision & Hierarchy
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'system': ['system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Nova Ledger Typography Scale
        'micro': ['10px', { lineHeight: '14px', letterSpacing: '0.05em', fontWeight: '500' }],
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '500' }], // Caption
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
        'base': ['16px', { lineHeight: '1.6', letterSpacing: '0' }], // Body
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.01em' }], // H2
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '40px', fontWeight: '700', letterSpacing: '-0.02em' }], // H1
        '5xl': ['48px', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.025em' }],
        '6xl': ['60px', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.025em' }],
        
        // Numeric/Data Display
        'mono-sm': ['12px', { lineHeight: '16px', fontFamily: 'Roboto Mono' }],
        'mono-base': ['14px', { lineHeight: '20px', fontFamily: 'Roboto Mono' }],
        'mono-lg': ['16px', { lineHeight: '24px', fontFamily: 'Roboto Mono' }],
        'mono-xl': ['18px', { lineHeight: '28px', fontFamily: 'Roboto Mono' }],
        'mono-2xl': ['24px', { lineHeight: '32px', fontFamily: 'Roboto Mono' }],
        'mono-3xl': ['36px', { lineHeight: '40px', fontFamily: 'Roboto Mono' }],
      },
      
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      
      // Nova Ledger 8pt Spacing System
      spacing: {
        // Micro spacing
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        
        // Standard 8pt increments
        '4.5': '1.125rem',  // 18px
        '5.5': '1.375rem',  // 22px
        '6.5': '1.625rem',  // 26px
        '7.5': '1.875rem',  // 30px
        '8.5': '2.125rem',  // 34px
        '9.5': '2.375rem',  // 38px
        '10.5': '2.625rem', // 42px
        '11.5': '2.875rem', // 46px
        '12.5': '3.125rem', // 50px
        '13.5': '3.375rem', // 54px
        '14.5': '3.625rem', // 58px
        '15.5': '3.875rem', // 62px
        
        // Extended spacing
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
        '26': '6.5rem',     // 104px
        '30': '7.5rem',     // 120px
        '34': '8.5rem',     // 136px
        '38': '9.5rem',     // 152px
        '42': '10.5rem',    // 168px
        '46': '11.5rem',    // 184px
        '50': '12.5rem',    // 200px
        '54': '13.5rem',    // 216px
        '58': '14.5rem',    // 232px
        '62': '15.5rem',    // 248px
        '68': '17rem',      // 272px
        '72': '18rem',      // 288px
        '76': '19rem',      // 304px
        '80': '20rem',      // 320px
        '88': '22rem',      // 352px
        '96': '24rem',      // 384px
      },
      
      // Nova Ledger Grid System
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      
      gap: {
        '4.5': '1.125rem',  // 18px
        '5.5': '1.375rem',  // 22px
        '6.5': '1.625rem',  // 26px
        '7.5': '1.875rem',  // 30px
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
        '26': '6.5rem',     // 104px
      },
      
      // Nova Ledger Border Radius System
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        'full': '9999px',
      },
      
      // Nova Ledger Shadow System - Subtle Elevation
      boxShadow: {
        // Hairline shadows for cards
        'hairline': '0 0 0 1px rgba(0, 0, 0, 0.05)',
        'hairline-strong': '0 0 0 1px rgba(0, 0, 0, 0.1)',
        
        // Nova elevation system
        'nova-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'nova': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'nova-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'nova-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'nova-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'nova-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        
        // Interactive shadows
        'hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 3px rgba(59, 130, 246, 0.15)',
        'active': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        
        // Colored shadows
        'blue': '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
        'green': '0 4px 14px 0 rgba(16, 185, 129, 0.25)',
        'red': '0 4px 14px 0 rgba(239, 68, 68, 0.25)',
        'yellow': '0 4px 14px 0 rgba(245, 158, 11, 0.25)',
        
        // Glass morphism
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-strong': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
      },
      
      // Nova Ledger Motion System - Precise & Purposeful
      transitionDuration: {
        '75': '75ms',     // Micro interactions
        '100': '100ms',   // Quick feedback
        '150': '150ms',   // Fast transitions
        '200': '200ms',   // Standard
        '250': '250ms',   // Nova standard
        '300': '300ms',   // Comfortable
        '400': '400ms',   // Slower emphasis
        '500': '500ms',   // Chart animations
        '600': '600ms',   // Complex animations
        '700': '700ms',   // Page transitions
        '1000': '1000ms', // Loading states
      },
      
      transitionTimingFunction: {
        'nova': 'cubic-bezier(0.4, 0, 0.2, 1)',           // Standard easing
        'nova-in': 'cubic-bezier(0.4, 0, 1, 1)',         // Ease in
        'nova-out': 'cubic-bezier(0, 0, 0.2, 1)',        // Ease out
        'nova-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Playful bounce
        'nova-sharp': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',    // Sharp transition
      },
      
      // Nova Ledger Animation Keyframes
      keyframes: {
        // Entry animations
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        
        // Scale animations
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-in-bounce': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Slide animations
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        
        // Chart animations
        'chart-bar-grow': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        'chart-line-draw': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'chart-pie-spin': {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(270deg)' },
        },
        
        // Loading animations
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-soft': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-5px,0)' },
          '70%': { transform: 'translate3d(0,-2px,0)' },
          '90%': { transform: 'translate3d(0,-1px,0)' },
        },
        
        // Notification animations
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        
        // Attention animations
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4)' },
        },
      },
      
      // Nova Ledger Animation Classes
      animation: {
        // Entry animations
        'fade-in': 'fade-in 250ms nova',
        'fade-in-up': 'fade-in-up 300ms nova',
        'fade-in-down': 'fade-in-down 300ms nova',
        'fade-in-left': 'fade-in-left 300ms nova',
        'fade-in-right': 'fade-in-right 300ms nova',
        
        // Scale animations
        'scale-in': 'scale-in 200ms nova',
        'scale-in-bounce': 'scale-in-bounce 400ms nova-bounce',
        
        // Slide animations
        'slide-in-left': 'slide-in-left 250ms nova',
        'slide-in-right': 'slide-in-right 250ms nova',
        'slide-up': 'slide-up 300ms nova',
        'slide-down': 'slide-down 300ms nova',
        
        // Chart animations
        'chart-bar': 'chart-bar-grow 600ms nova',
        'chart-line': 'chart-line-draw 1000ms nova',
        'chart-pie': 'chart-pie-spin 800ms nova',
        
        // Loading states
        'pulse-soft': 'pulse-soft 2s nova infinite',
        'bounce-soft': 'bounce-soft 1s nova infinite',
        
        // Interactive feedback
        'shake': 'shake 500ms nova',
        'glow': 'glow 2s nova infinite',
        
        // Staggered animations (for lists)
        'stagger-1': 'fade-in-up 300ms nova 0ms both',
        'stagger-2': 'fade-in-up 300ms nova 100ms both',
        'stagger-3': 'fade-in-up 300ms nova 200ms both',
        'stagger-4': 'fade-in-up 300ms nova 300ms both',
        'stagger-5': 'fade-in-up 300ms nova 400ms both',
      },
      
      // Nova Ledger Breakpoint System
      screens: {
        'xs': '475px',     // Small mobile
        'sm': '640px',     // Mobile
        'md': '768px',     // Tablet
        'lg': '1024px',    // Small desktop
        'xl': '1280px',    // Desktop
        '2xl': '1440px',   // Large desktop
        '3xl': '1920px',   // Extra large desktop
        
        // Custom breakpoints for specific layouts
        'sidebar-break': '1024px', // When sidebar becomes full width
        'card-break': '640px',     // When cards stack
        'nav-break': '768px',      // Navigation breakpoint
      },
      
      // Additional design system properties
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'nova': '8px', // Standard Nova blur
      },
      
      backdropBrightness: {
        'nova-dim': '0.95',
        'nova-bright': '1.05',
      },
      
      // Z-index system
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'fixed': '300',
        'modal-backdrop': '400',
        'modal': '500',
        'popover': '600',
        'tooltip': '700',
        'notification': '800',
        'max': '9999',
      },
      
      // Opacity scale
      opacity: {
        '2': '0.02',
        '4': '0.04',
        '6': '0.06',
        '8': '0.08',
        '12': '0.12',
        '16': '0.16',
        '24': '0.24',
        '32': '0.32',
        '48': '0.48',
        '56': '0.56',
        '64': '0.64',
        '72': '0.72',
        '88': '0.88',
        '92': '0.92',
        '96': '0.96',
      },
      
      // Scale transformations
      scale: {
        '98': '0.98',
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
}
