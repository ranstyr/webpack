var path = require("path");


module.exports = {
    //relative root directory for entry key
    context : path.resolve("js"),
    //entry - name of set of files that we want to include n the build
    entry : ["./app.js" ,'./utils'] ,
    //output file - can have a few key , we care about the file name
    output : {
        //put the output file/bubdle.js at build/js
        path : path.resolve('./build/js'),
        //tell webpack from where to serve the output file at the webserver
        //every request from /public/assest/js will go to /build/js
        //
        publicPath : '/public/assest/js',
        filename: "./bundle.js"
    },
    devServer : {
      contentBase : 'public'
    },
    watch : true
}