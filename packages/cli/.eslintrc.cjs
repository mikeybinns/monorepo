module.exports = {
	extends: ["@atomicsmash/eslint-config"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	env: {
		es2021: true,
	},
};
