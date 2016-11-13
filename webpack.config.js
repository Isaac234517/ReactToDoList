module.exports ={
	entry:[
	  './source/App.js'
	],
	output:{
		path: __dirname,
		filename: "bundle.js"
	},
	module:{
		loaders:[
		 {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		 }
		]
	},
	devServer:{
		inline: true,
		port: 8008
	}
};