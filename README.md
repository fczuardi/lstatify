# lstatify
browserify transform that replaces fs.lstatSync(path).something with it's value. Useful for inlining file sizes.

## usage

```
browserify before.js -t lstatify --outfile after.js
```

Basically it will turn:
```
var size = fs.lstatSync('./README.md').size;
```

into:
```
var size = 304;
```

## limitations

This is a really basic and dumb transform, that will eval the lstatSync call and inline the result,
which means that things like:

```
var path = './README.md'
var size = fs.lstatSync(path).size;
```

WILL NOT WORK :)

## license: MIT

Fabricio C Zuardi

