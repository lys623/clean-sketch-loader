# clean-sketch-loader

> Cleanup [Sketch](http://bohemiancoding.com/sketch/) SVG files

_Issues with the output should be reported on the [clean-sketch issue tracker](https://github.com/overblog/clean-sketch/issues)._

## Install

```sh
$ npm install --save-dev clean-sketch-loader
```

## Usage

```js
module.exports = {
  //...
    module: {
        rules: [
            {
                test: /\.svg/,
                use: {
                    loader: 'clean-sketch-loader',
                }
            }
        ]
    },
    //...
};
```

## API

### cleanSketch()

Removes Sketch namespaces and metadata.

## License

MIT © Overblog
