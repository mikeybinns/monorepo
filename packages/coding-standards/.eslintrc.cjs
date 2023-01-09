module.exports = {
	ignorePatterns: [".eslintrc.cjs", "dist/**/*", "**/*.config.*"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prefer-type-alias", "import"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/typescript",
		"prettier",
	],
	rules: {
		"no-case-declarations": ["off"],
		"import/order": [
			"error",
			{
				alphabetize: {
					order: "asc",
				},
				groups: [
					"type",
					"builtin",
					"external",
					"internal",
					"parent",
					["sibling", "index"],
				],
				"newlines-between": "ignore",
				pathGroups: [],
				pathGroupsExcludedImportTypes: [],
			},
		],
		"prefer-const": ["error"],
		"no-var": ["error"],
		"@typescript-eslint/naming-convention": [
			"error",
			{ selector: "variableLike", format: ["camelCase"] },
			{ selector: "function", format: ["camelCase", "PascalCase"] },
			{ selector: "typeLike", format: ["PascalCase"] },
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"],
			},
		],
		"import/no-duplicates": "warn",
		"prefer-type-alias/prefer-type-alias": "error",
	},
};
