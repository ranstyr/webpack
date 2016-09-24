//Source Map support is very easy - just add -d to the terminal webpack-dev-server -d
//minified is also very easy      - just add -p to the terminak wepback-dev-server -p

var path = require("path");


module.exports = {
    //relative root directory for entry key
    context: path.resolve("js"),
    //entry - name of set of files that we want to include n the build
    entry: ["./app"],
    //output file - can have a few key , we care about the file name
    output: {
        //put the output file/bubdle.js at build/js
        //We dont want to build to public folder as we dont want to add it to source code
        path: path.resolve('./build/'),
        //tell webpack from where to serve the output file at the webserver
        //every request from /public/assest/js will go to /build/js
        publicPath: '/public/assest/',
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                excelude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            //? -> ? is paramter for the loader
            //any image under 1000000 (100kb) is going to inline base 64
            //usally we will want to set limit to 8kb
            //any bigger will be created as seperate image and we will request it in a diffrent request
            {
                test: /\.(png|jpg)$/,
                excelude: /node_modules/,
                loader: "url-loader?limit=1000000"
            }
        ]
    },
    //request from the root will go to public
    devServer: {
        contentBase: 'public'
    },
    watch: true,
    resolve: {
        extensions: ['', '.js', 'css']
    }
};