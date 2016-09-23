/**
 * Created by moranadrian on 22.9.16.
 */
var WebpackSrip = require("strip-loader");
var devConfig = require("./webpack.config");

var stripLoader = {
    test : [/\.js$/ , /\.es6$/],
    excelude : /node_module/,
    loader : WebpackSrip.loader('console.log' , 'perflog')
}

devConfig.module.loader.push(stripLoader);

//we will use http-server to run it. because regule webpack server will run devlopment config file
module.exports = devConfig;