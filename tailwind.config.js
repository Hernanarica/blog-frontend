module.exports = {
	content: [
		'./src/**',
		'./node_modules/@themesberg/flowbite/**/*.js'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@themesberg/flowbite/plugin')
	]
};
