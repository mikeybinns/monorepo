module.exports = {
	multipass: true,
	floatPrecision: 2,
	plugins: [
		{
			name: "preset-default",
			params: {
				overrides: {
					cleanupNumericValues: {
						floatPrecision: 2,
					},
					removeEditorsNSData: false,
					// The next two lines remove hard coded width and height in favour of viewBox. Set size of the icon in CSS.
					removeViewBox: false,
					removeDimensions: false,
				},
			},
		},
	],
};
