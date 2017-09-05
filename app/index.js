import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';

/* begin Redux Configuration */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppRedux from './src/reducers';
let store = createStore(AppRedux, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* end Redux Configuration */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));