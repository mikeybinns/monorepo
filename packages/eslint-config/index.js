module.exports = {
	ignorePatterns: [".eslintrc.cjs", "dist/**/*", "**/*.config.*"],
	plugins: ["import"],
	extends: [
		"eslint:recommended",
		"plugin:eslint-comments/recommended",
		"prettier",
	],
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es2017: true,
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
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"eslint-comments/no-unused-disable": "error",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint", "import"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:eslint-comments/recommended",
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
				"@typescript-eslint/strict-boolean-expressions": "error",
			},
		},
	],
};
