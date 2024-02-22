const path = require('path');

module.exports = {
    mode: 'development', // or 'production' for production mode
    entry: './scripts/main.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle file name
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        port: 9000, // Specify the port for webpack's development server
    }
};
