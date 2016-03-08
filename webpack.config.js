var path = require("path");

module.exports = {
    entry: {
			main: "./src/main.js",
    },
    output: {
				path: path.join(__dirname, "dist"),
        filename: "sofe-inspector.js"
    },
		module: {
			loaders: [
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
				{ test: /\.css$/, loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				]}
			]
		},
		devtool: 'sourcemap'
}
