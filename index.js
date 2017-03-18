var through = require('through2');
var fs = require('fs');

module.exports = function (file) {
    return through(function (buf, enc, next) {
        var pattern = new RegExp("(fs.lstatSync\\([^\\)]*\\)\\.\\w+)", "g");
        this.push(buf.toString('utf8').replace(pattern, function(match){ return eval(match);}));
        next();
    });
};
