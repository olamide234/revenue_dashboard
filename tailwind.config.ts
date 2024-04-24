import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        publicSans: ['Public Sans', 'san-serif'],
      },
      boxShadow: {
        'navShadow': '0 2px 4px 0px rgba(45, 59, 67, 0.05), 0 2px 6px 0px rgba(45, 59, 67, 0.06)',
        'sideBarShadow': '0 6px 12px 0px rgba(92, 115, 131, 0.08), 0 4px 8px 0px rgba(92, 115, 131, 0.08)',
        'dialogShadow': '0 8px 16px 4px rgba(188, 196, 204, 0.1), 0 12px 24px 0px rgba(219, 222, 229, 0.1), 0 16px 32px 0px rgba(219, 222, 229, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
