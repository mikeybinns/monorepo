module.exports = {
	ignorePatterns: [".eslintrc.cjs", "dist/**/*", "**/*.config.*"],
	plugins: ["import"],
	extends: ["eslint:recommended", "prettier"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
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
		"import/no-duplicates": "warn",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
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
				"prefer-type-alias/prefer-type-alias": "error",
			},
		},
	],
};
