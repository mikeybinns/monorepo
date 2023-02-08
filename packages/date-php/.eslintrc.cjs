module.exports = {
	extends: ["../coding-standards/.eslintrc.cjs"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
};
