/* eslint-disable */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import express from 'express';
import config from '../../webpack.dev.config';

const app = express();


const DIST_DIR = __dirname;
// eslint-disable-line no-undef

const HTML_FILE = path.resolve(DIST_DIR, 'index.html');


const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res /* , next */) => {
    res.sendFile(HTML_FILE);
    // compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    // if (err) {
    //   return next(err)
    // }
    // res.set('content-type', 'text/babel')
    // res.send(result)
    // res.end()
    // })
});
const PORT = process.env.PORT || 8080; // eslint-disable-line no-undef
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});


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
