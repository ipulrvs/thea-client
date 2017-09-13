import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './src/App.jsx'

/* begin Redux Configuration */
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reducers from './src/config/Reducers.jsx'
let store = createStore(Reducers, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* end Redux Configuration */

/* load Theme Configuration */
var Theme = createMuiTheme({})
/* end Theme Configuration */

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={Theme}>
			<App />
		</MuiThemeProvider>
	</Provider>
, document.getElementById('app'))