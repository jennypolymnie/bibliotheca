import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FormLab from './FormLab';
import Board from './Board';
import ArticleSearch from './ArticleSearch';
import BibliothecaireRequest from './BibliothecaireRequest';

ReactDOM.render(<BibliothecaireRequest/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
