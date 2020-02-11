import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// Initializing packages
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World 2!');
})

app.get('/api', (req, res) => {
  res.json({API: `Mick's API!`})
});

// Start server
app.listen(app.get('port'), () => {
  console.log('server running on port', app.get('port'));
});

