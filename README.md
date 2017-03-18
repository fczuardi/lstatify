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

alternatively you can use one of the options below to make your 
linter ignore the fact that you havent required fs

```
var size2 = window.lstatSync('./README.md').size;
var size3 = global.lstatSync('./README.md').size;
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

