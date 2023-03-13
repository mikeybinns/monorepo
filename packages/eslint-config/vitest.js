module.exports = {
	extends: ["@remix-run/eslint-config/jest-testing-library", "prettier"],
	// I use vitest which has a very similar API to jest
	// (so the linting plugins work nicely), but it means we have to explicitly
	// set the jest version.
	settings: {
		jest: {
			version: 28,
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
			extends: ["@remix-run/eslint-config/jest-testing-library", "prettier"],
		},
	],
};
