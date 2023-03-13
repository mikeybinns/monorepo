module.exports = {
	ignorePatterns: ["build/**/*", "public/build/**/*"],
	extends: [
		"@remix-run/eslint-config",
		"@remix-run/eslint-config/node",
		"prettier",
	],
	rules: {
		"react/forbid-elements": [
			1,
			{
				forbid: [
					{
						element: "button",
						message: "Use <Button> or <Hyperlink> instead.",
					},
					{
						element: "a",
						message: "Use <Button> or <Hyperlink> instead.",
					},
					{
						element: "Link",
						message: "Use <Button> or <Hyperlink> instead.",
					},
					{
						element: "NavLink",
						message: "Use <Button> or <Hyperlink> instead.",
					},
					{
						element: "h2",
						message: "Please use <Heading> inside a <HeadingGroup> instead.",
					},
					{
						element: "h3",
						message: "Please use <Heading> inside a <HeadingGroup> instead.",
					},
					{
						element: "h4",
						message: "Please use <Heading> inside a <HeadingGroup> instead.",
					},
					{
						element: "h5",
						message: "Please use <Heading> inside a <HeadingGroup> instead.",
					},
					{
						element: "h6",
						message: "Please use <Heading> inside a <HeadingGroup> instead.",
					},
				],
			},
		],
		"react/jsx-key": [
			"warn",
			{
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: true,
				warnOnDuplicates: true,
			},
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
			extends: [
				"@remix-run/eslint-config",
				"@remix-run/eslint-config/node",
				"prettier",
			],
		},
	],
};
