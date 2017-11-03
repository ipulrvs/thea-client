import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './src/App.jsx'

/* begin Redux Configuration */
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reducers from './src/config/Reducers'
let store = createStore(Reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
/* end Redux Configuration */

/* load Theme Configuration */
import primary from 'material-ui/colors/red';
var Theme = createMuiTheme({
	palette: {
		primary: primary
	}
})
/* end Theme Configuration */

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={Theme}>
			<App />
		</MuiThemeProvider>
	</Provider>
, document.getElementById('app'))