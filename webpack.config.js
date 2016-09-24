//Source Map support is very easy - just add -d to the terminal webpack-dev-server -d
//minified is also very easy      - just add -p to the terminak wepback-dev-server -p


//if we want to add input file to webpack compiler we have two options
//1.add it to the entry
//2.require it in one of the files

var path = require("path");
//plugin to seperate css files
var ExtarctTextPlugin = require('extract-text-webpack-plugin');


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
    plugin: [
        new ExtarctTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            {
                test: /\.es6$/,
                excelude: /node_modules/,
                loader: "babel-loader"
            },
            //we have 2 loaders that will run once webpack see CSS file
            //it will run it throw css loader and than style   loader
            //! just say that we more than one loader
            {
                test: /\.css$/,
                excelude: /node_module/,
                loader: ExtarctTextPlugin.extract('style-loader" , "css-loader')
            },
            {
                test: /\.scss/,
                excelude: /node_module/,
                loader: ExtarctTextPlugin.extract('style-loader" , "css-loader!sass-loader')
            }

        ]
    },
    //request from the root will go to public
    devServer: {
        contentBase: 'public'
    },
    watch: true,
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};