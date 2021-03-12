const mix = require('laravel-mix')

mix
  .options({
    hmrOptions: {
      host: 'localhost',
      port: '8079'
    },
  })
  .sass('sass/app.sass', 'css/app.css')
