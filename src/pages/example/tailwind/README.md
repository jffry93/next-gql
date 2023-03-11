How to use!!

Set global themes in the tailwind.config.js file.

```

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  ...
	],
	theme: {
		...,
		extend: {

      // *** Add your customer CSS below ***

			colors: {
				customPrimary: 'var(--primary)',
			},
			fontFamily: {
				customPrimaryFont: ['var(--font-mono)'],
			},
			gridTemplateColumns: {
				customFluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};

```
