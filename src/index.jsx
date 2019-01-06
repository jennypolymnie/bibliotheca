import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import routes from './routes';
import App from './components/App'
// import SearchResults from './components/views/search-results/SearchResults'
// import 'semantic-ui-css/semantic.min.css'

require('./components/views/search-results/stylesheets/SearchResults.css');
require('./index.css');


ReactDom.render(
  // <SearchResults />,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
