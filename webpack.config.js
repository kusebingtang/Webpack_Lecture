'use strict';

const path = require('path');

module.exports = {
    entry: {
        bundle : './src/index.js',
        search : './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production'
};
