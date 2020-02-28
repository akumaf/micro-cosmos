var mix = require('laravel-mix');

mix.js('./src/main.js', './dist/main.js')

    .copy('./src/*.html', './dist/');