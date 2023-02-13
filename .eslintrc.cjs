const eslintConfig = require("@atomicsmash/coding-standards").eslintConfig;
module.exports = {
	...eslintConfig,
	parserOptions: {
		...(eslintConfig.ignorePatterns ?? []),
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	ignorePatterns: [
		...(eslintConfig.ignorePatterns ?? []),
		"./packages/__TEMPLATE__/**/*",
	],
};
