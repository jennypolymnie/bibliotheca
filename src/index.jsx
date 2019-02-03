import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'semantic-ui-less/semantic.less';
import './index.css';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app') // eslint-disable-line no-undef 
);

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef 
  module.hot.accept() // eslint-disable-line no-undef  
}


