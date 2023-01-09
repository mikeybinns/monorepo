module.exports = {
	extends: ["./packages/coding-standards/.eslintrc.cjs"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
};
