var webpack = require('webpack');
var path = require("path");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shred.js')

module.exports = {
    //relative root directory for entry key
    context : path.resolve("js"),
    //entry - name of set of files that we want to include n the build
    entry : {
        about : './about_page.js',
        home : './home_page.js',
        contact : './contact_page.js'
    },
    //output file - can have a few key , we care about the file name
    output : {
        //put the output file/bubdle.js at build/js
        //We dont want to build to public folder as we dont want to add it to source code
        path : path.resolve('./build/js'),
        //tell webpack from where to serve the output file at the webserver
        //every request from /public/assest/js will go to /build/js
        publicPath : '/public/assest/js',
        filename: "[name].js"
    },
    module : {
        loaders : [
            {
              test: /\.es6$/,
              excelude: /node_modules/,
              loader : "babel-loader"
            }
        ]
    },
    plugin :[commonsPlugin],
    //request from the root will go to public
    devServer : {
      contentBase : 'public'
    },
    watch : true,
    resolve : {
        extensions : ['' , '.js' , '.es6']
    }
};