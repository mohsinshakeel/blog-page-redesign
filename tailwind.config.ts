import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  // darkMode: 'selector',
  theme: {
    screens: {
      xs: '300px',
      // => @media (min-width: 300px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue':
          'linear-gradient(to right, #003F70, #005C90, #006E94, #008DB2, #62ACCA)',
        'custom-gradient': 'linear-gradient(90deg, #E2CEFD 0%, #6301EF 100%)',
        'card-gradient':
          'linear-gradient(62.44deg, #1D0CB6 -42.93%, #7466F5 -42.92%, #B480FF 47.91%, #F0B3FF 138.75%)',
        'spare-gradient':
          'linear-gradient(270deg, rgba(220, 220, 255, 0.6) 0%, rgba(98, 0, 238, 0.6) 100%)',
      },
      colors: {
        bodyColor: 'var(--body)',
        headingColor: 'var(--heading)',
        subheadingColor: 'var(--subheading)',
        iconColor: 'var(--icon-color)',

        appleGreen: 'var(--apple-green)',
        orangeWeb: 'var(--orange-web)',
        skyBlue: 'var(--sky-blue)',
        skyBlue1: 'var(--sky-blue-1)',

        customBlue: 'var(--custom-blue)',
        customPink: 'var(--custom-pink)',
        customGreen: 'var(--custom-green)',
        customGrey: 'var(--custom-grey)',
        customWhite: 'var(--custom-white)',
        customPurple: 'var(--custom-purple)',
        customYellow: 'var(--custom-yellow)',

        lightYellow: 'var(--light-yellow)',
        lightGreen: 'var(--light-green)',
        lightBlue: 'var(--light-blue)',
        lightPink: 'var(--light-pink)',
        lightGrey: 'var(--light-grey)',
        lightPurple: 'var(--light-purple)',

        searchBarBg: 'var(--search-bar-bg)',

        paymentCardBackground: 'var(--payment-card-background)',

        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        scrollthumb: 'var(--scroll-thumb)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        textGradient:
          'linear-gradient(91.24deg, #6200EE 8.4%, #9F3AC9 44.76%, #F98F93 99.29%)',
        lineChartGradient:
          'linear-gradient(180deg, #71E26F 0%, #72E270 38.6%, #F1E91B 68.96%, #F56565 86.31%, #FCCACA 107.21%)',

        brand: {
          DEFAULT: 'var(--brand)',
          light: 'var(--brand-light)',
          dark: 'var(--brand-dark)',
          medium: 'var(--brand-medium)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
          light: 'var(--destructive-light)',
          medium: 'var(--destructive-medium)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent-light)',
          foreground: 'var(--accent-foreground)',
          dark: 'var(--accent)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        progress: {
          DEFAULT: 'var(--progress)',
          foreground: 'var(--progress-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          light: 'var(--success-light)',
          medium: 'var(--success-medium)',
        },
        dropdown: {
          DEFAULT: 'var(--customWhite)',
          hover: 'var(--dropdown-hover)',
        },
        slider: {
          DEFAULT: 'var(--slider)',
          foreground: 'var(--slider-foreground)',
          active: 'var(--slider-foreground-active)',
        },
      },
      animation: {
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
