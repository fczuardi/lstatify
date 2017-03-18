var through = require('through2');
var fs = require('fs');

module.exports = function (file) {
    return through(function (buf, enc, next) {
        var pattern = new RegExp("\\w+\\.(lstatSync\\([^\\)]*\\)\\.\\w+)", "g");
        this.push(buf.toString('utf8').replace(pattern, function(all, match1){ return eval('fs.' + match1);}));
        next();
    });
};
