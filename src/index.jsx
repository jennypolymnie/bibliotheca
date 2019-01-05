import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes';

require('./components/views/search-results/stylesheets/SearchResults.scss');

ReactDom.render(
  <BrowserRouter routes={routes} />,
  document.querySelector('#app')
);
