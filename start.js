const opn = require('opn');
const portfinder = require('portfinder');
const supportsColor = require('supports-color');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
    stats: {
        cached: false,
        cachedAssets: false,
        modules: false,
        colors: supportsColor,
        entrypoints: false,
    },
});
portfinder.getPort((err, port) => {
    if (err) throw err;
    server.listen(port, 'localhost', err => {
        if (err) throw err;
        opn(`http://localhost:${port}`);
    });
});
