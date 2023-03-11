/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		debugScreens: {
			position: ['bottom', 'right'],
			style: {
				backgroundColor: '#C0FFEE',
				color: 'black',
			},
		},
		extend: {
			colors: {
				customPrimary: 'var(--primary)',
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
			},
			gridTemplateColumns: {
				customFluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
