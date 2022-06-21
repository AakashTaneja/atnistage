const path = require('path');

module.exports = {
    // inform webpack that we are building a bundle for node js
    // rather than for the browser
    target: 'node',

    // tell the webpack the root file for our server application
    entry: './client/src/index.js',

    // tell webpack where to put the output file that is generated
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client', 'build')
    },

    // tell webpack to run bable for every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
    
};