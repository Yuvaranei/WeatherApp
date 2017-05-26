module.exports = {
    entry : './scripts/main.js',
    output : {
        path : __dirname,
        filename : 'weatherapp.js'
    },
    devServer : {
        inline : true,
        host : '0.0.0.0'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015', 'react']
                }
            },
            {
                test : /\.scss|.css$/,
                loader : ['style-loader','css-loader','sass-loader']
            },
            {
                test : /\.(png|jpg|svg|ttf|woff2|eot|woff)$/,
                loader : 'url-loader'
            }
        ]
    }
}