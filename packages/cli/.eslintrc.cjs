module.exports = {
	...require("@atomicsmash/coding-standards").eslintConfig,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
};
