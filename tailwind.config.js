/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./layouts/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#9656A1',
				secondary: '#C2B0C9',
				accent: '#CCCCCC',
				bacground: '#F4EFD3',
			},
		},
	},
	plugins: [],
};
