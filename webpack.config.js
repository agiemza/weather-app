const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Weather App",
			favicon: "./src/assets/favicon.ico",
		}),
	],
}
