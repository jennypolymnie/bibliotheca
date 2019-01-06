var bodyParser = require('body-parser');
// var webpack = require('webpack');
// var config = require('./webpack.config.dev.js');
// var app = express();
// var compiler = webpack(config);
import path from 'path'
import express from 'express'
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.resolve(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
// app.use('/public', express.static('public'));
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });
// app.listen(process.env.PORT || 5000, function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
// console.log('Listening at http://localhost:5000');
// });