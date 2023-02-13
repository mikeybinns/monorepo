const eslintConfig = require("@atomicsmash/coding-standards").eslintConfig;
module.exports = {
	...eslintConfig,
	ignorePatterns: [...(eslintConfig.ignorePatterns ?? []), "**/*.d.ts"],
};
