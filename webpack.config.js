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
		 {  test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
		 { test: /\.css$/, loader: "style-loader!css-loader" },
      	 { test: /\.(png|jpg)$/, loader: "url-loader?limit=100000" },
         { test: /\.jpg$/, loader: "file-loader" }
		]
	},
	devServer:{
		inline: true,
		port: 8008
	}
};