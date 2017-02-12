const OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
          { removeTitle: true },
          { convertColors: { shorthex: true } },
          { convertPathData: false },
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // ... other plugins
    // it always better if OfflinePlugin is the last plugin added
    new OfflinePlugin({ externals: [
      './index.html',
      './poi.html',
      './maps.html',
      './css/materialize.min.css',
      './css/materialdesignicons.min.css',
      './js/master.js',
      './js/init.js',
      './js/materialize.min.js',
      './img/asterisk.svg',
      './img/t1/trail1sign.png',
      './img/t1/trail1map.jpg',
      './img/t1/0.jpg',
      './img/t1/1.jpg',
      './img/t1/2.jpg',
      './img/t1/12.jpg',
      './img/t1/4.jpg',
      './img/t1/5.jpg',
      './img/t1/6.jpg',
      './img/t1/8.jpg',
      './img/t1/9.jpg',
      './img/t1/13.jpg',
      './img/t2/1.jpg',
      './img/t2/2.jpg',
      './img/t2/3.jpg',
      './img/t2/4.jpg',
      './img/t2/5.jpg',
      './img/t2/6.jpg',
      './img/t2/7.jpg',
      './img/t2/8.jpg',
      './img/t2/9.jpg',
      './img/t2/10.jpg',
      './img/t2/11.jpg',
      './img/t2/12.jpg',
      './img/t2/13.jpg',
      './img/t2/14.jpg',
      './img/t2/15.jpg',
      './img/t2/16.jpg',
      './img/t2/17.jpg',
      './img/t3/1.jpg',
      './img/t3/2.jpg',
      './img/t3/3.jpg',
      './img/t3/4.jpg',
      './img/t3/trail3map.jpg',
      './fonts/roboto/Roboto-Medium.woff',
      './fonts/roboto/Roboto-Regular.woff',
      './fonts/roboto/Roboto-Light.woff',
      './fonts/roboto/Roboto-Thin.woff',
      './fonts/roboto/Roboto-Bold.woff',
      './fonts/materialdesignicons-webfont.woff?v=1.5.54',
      './fonts/roboto/Roboto-Medium.woff2',
      './fonts/roboto/Roboto-Regular.woff2',
      './fonts/roboto/Roboto-Light.woff2',
      './fonts/roboto/Roboto-Thin.woff2',
      './fonts/roboto/Roboto-Bold.woff2',
      './fonts/materialdesignicons-webfont.woff2?v=1.5.54',
      './img/t3/5.jpg',
      './img/t3/6.jpg',
      './img/t3/7.jpg',
      './img/t3/8.jpg',
      './img/t3/9.jpg',
      './img/t3/10.jpg',
      './img/t3/11.jpg',
      './img/t3/12.jpg',
      './img/t3/13.jpg',
      './img/t3/14.jpg',
      './img/t3/15.jpg',
      './img/t3/16.jpg',
      './img/t3/17.jpg',
      './img/kullabergsNaturum.svg',
      './img/Kv4sq.svg',
      './js/init2.js',
      './js/jquery.min.js',
      './img/kullabergKarta.svg',
      './img/t1/mapKullaleden.jpg',
      './img/t1/trail1mapZoom.jpg',
      './favicon/favicon-32x32.png?v=eEEwEaEvl1',
      './favicon/favicon-16x16.png?v=eEEwEaEvl1',
      './favicon/favicon-96x96.png?v=eEEwEaEvl1',
      './favicon/favicon-194x194.png?v=eEEwEaEvl1',
      './favicon/android-chrome-36x36.png?v=eEEwEaEvl1',
      './favicon/android-chrome-48x48.png?v=eEEwEaEvl1',
      './favicon/android-chrome-72x72.png?v=eEEwEaEvl1',
      './favicon/android-chrome-96x96.png?v=eEEwEaEvl1',
      './favicon/android-chrome-144x144.png?v=eEEwEaEvl1',
      './favicon/android-chrome-192x192.png?v=eEEwEaEvl1',
      './favicon/favicon-16x16.png?v=eEEwEaEvl1',
      './favicon.ico?v=eEEwEaEvl',
      './manifest.json',
      './img/lansstyrelsen.svg',
      './img/regionSkane.svg'
    ] }),
  ],


};
