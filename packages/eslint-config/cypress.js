module.exports = {
	plugins: ["cypress"],
	env: {
		"cypress/globals": true,
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
			plugins: ["cypress"],
		},
	],
};
