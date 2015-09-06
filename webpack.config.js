module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'build/bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css?importLoaders=1"},
            {test: /\.(sass|scss)$/, loader: "style!css!sass?outputStyle=expanded"},
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=100000'}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
