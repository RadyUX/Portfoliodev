/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'tablet': '600px',
				// => @media (min-width: 640px) { ... }
		  
				'laptop': '1024px',
				// => @media (min-width: 1024px) { ... }
		  
				'desktop': '1630px',
				// => @media (min-width: 1280px) { ... }
			  },
			colors: {
				'dark-blue': '#101826',
				'regular-blue': "#3D5A80",
				'clear-blue': "#6CCFF6",
				'pastel-red': "#FB6376",
				
				 
			  },
			  fontFamily: {
				'spartan': ['League Spartan', 'sans-serif'],
				'varela': ['Valera Round', 'sans-serif'],
			  }
		},
	},
	plugins: [],
}
