# Thea-client
Ready Client Stack for Fast Development built by React and Material UI

## Requirement
- Internet Connection
- [Node.js latest version](https://nodejs.com) or NVM
- Basic knowledge React
- Basic knowledge React Router
- Basic knowledge Redux

## Getting Started

## Rebuild same repository Reminder
You can use `yarn add` instead `npm install` for package installer.
1. Install started react enviroment
   - [Optional] install yarn `npm install -g yarn` add global path to yarn in your system Windows/Linux
   - install webpack in global `npm install -g webpack`
   - install babel in global `npm install -g babel`
   - install babel cli in global `npm install -g babel-cli`
   - create folder container env `mkdir app-webpack`
   - open folder env `cd app-webpack`
   - initialize package.json with `npm init`
   - install webpack `npm install webpack --save`
   - install webpack-dev-server `npm install webpack-dev-server --save`
   - install react `npm install react --save`
   - install react-dom `npm install react-dom --save`
   - install babel-plugins `npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save`
   - create script directory `mkdir src`
   - create index.html index.js index.css src/App.jsx and webpack config `touch index.html index.js webpack.config.js src/App.jsx`
   - add or edit **index.html** and replace with
        ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React Env</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="index.js"></script>
        </body>
        </html>
        ```
   - add or edit **src/App.jsx** and replace with
        ```
        import React from 'react';
        
        class App extends React.Component {
           render() {
              return (
                 <div>
                    Hello React Script !!!
                 </div>
              );
           }
        }
        
        export default App;
        ```
    - add or edit **index.js** and replace with
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        ReactDOM.render(<App />, document.getElementById('app'));
        ```
    - add or edit **webpack.config.js** and replace with
        ```
        const path = require('path');

        var config = {
        	entry: './index.js',
        	output: {
                path: path.join(__dirname, "build/"),
                publicPath: "/",
                filename: "index.js"
            },
        	devServer: {
        		inline: true,
        		port: 8080
        	},
            module: {
        		loaders: [
        			{
        				test: /\.jsx?$/,
        				exclude: /node_modules/,
        				loader: 'babel-loader',
        					query: {
        						presets: ['es2015', 'react']
        					}
        			}
        		]
        	}
        }
        
        module.exports = config;
        ```
    - open **package.json** and replace this line
        ```
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        }, 
        ```
        with this 
        ```
        "scripts": {
            "start": "webpack-dev-server --hot",
            "build": "webpack"
        }, 
        ```
    - after all config has complete run with `npm start`
2. Integrate material-ui framework 
   - install material-ui `npm install material-ui --save`
   - import and add MuiThemeProvider see [Usage](http://www.material-ui.com/#/get-started/usage) for detail
   - install material-ui `npm install material-ui-icons --save`
3. Integrate react-router 
   - install react-router `npm install react-router --save`
   - install react-router-dom `npm install react-router-dom` --save
   - create config directory `mkdir src\config`
   - create routers config file `touch src\config\Routes.jsx`
   - create sample router configuration add or edit file in `src\config\Routes.jsx` with
        ```
        import React from 'react'
        import {
          HashRouter as Router,
          Route,
          Link
        } from 'react-router-dom'
        
        import Sample from './../routes/Sample.jsx'
        import SampleTwo from './../routes/SampleTwo.jsx'
        
        class Routes extends React.Component {
           render() {
              return (
                <Router>
                <div>
        		<Route exact path="/" component={Sample} />
        		<Route exact path="/sampleTwo" component={SampleTwo} />
                </div>
                </Router>
              );
           }
        }
        
        export default Routes
        ````
   - create entites folder `mkdir src\routes`
   - create sample entities `touch src\routes\Sample.jsx`
   - add or edit file `src\routes\Sample.jsx` with
        ```
        import React from 'react';
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
   - create second sample entities `touch src\routes\SampleTwo.jsx`
   - add or edit file `src\routes\SampleTwo.jsx` with
        ```
        import React from 'react';
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/">GO TO SAMPLE OR HOME</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
    - after config and sample components entities has been create add config file to our main components in `src/App.jsx`
    - add or edit `src/App.jsx` with
        ```
        import React from 'react';
        import Routes from './config/Routes.jsx'
        
        class App extends React.Component {
           render() {
              return (
                 <div>
                    <Routes />
                 </div>
              );
           }
        }
        
        export default App;
        ```
    - run application to see how it work with **npm start**
    - see detail of [Usage and Example](https://reacttraining.com/react-router/web/example/basic) in documentation
4. Integrate redux and react-redux
   - install babel-plugin-transform-decorators-legacy `npm install babel-plugin-transform-decorators-legacy --save`
   - install babel-plugin-transform-class-properties `npm install babel-plugin-transform-class-properties --save`
   - install babel-plugin-transform-object-rest-spread
 `npm install babel-plugin-transform-object-rest-spread`
   - add or edit our **webpack.config.js** with
       ```
       query: {
            presets: ['es2015', 'react']
       }
       ```
    - replace with
      ```
      query: {
		plugins: [
		    "transform-decorators-legacy", 
		    "transform-class-properties", 
		    "transform-object-rest-spread"
		    ],
			presets: ['es2015', 'react']
	  }
      ```
   - install redux `npm install redux --save`
   - install react-redux `npm install react-redux --save`
   - install react-thunk `npm install react-thunk --save`
   - install redux-decorator `npm install redux-connect-decorator --save`
   - install chrome ext react and redux dev tools ! 
   - visit [chrome webstore](https://chrome.google.com/webstore/category/extensions) and search react dev tool and redux dev tool
   - add or edit our main **index.js** 
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        ReactDOM.render(<App />, document.getElementById('app'));
        ```
    - replace with 
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        /* begin Redux Configuration */
        import { createStore, applyMiddleware } from 'redux'
        import { Provider } from 'react-redux'
        import thunk from 'redux-thunk'
        import Reducers from './src/config/Reducers'
        let store = createStore(Reducers, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        /* end Redux Configuration */
        
        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
        ```
    - create reducers config file `touch src/config/Reducers.js`
    - add or edit `src/config/Reducers.js` wtih 
        ```
        import { combineReducers } from 'redux'
        import GlobalReducer from './Global'
        
        const Reducers = combineReducers({
        	global: GlobalReducer
        })
        
        export default Reducers
        ```
    - create our first store called **Global Reducer** store that can be access anywhere
    - create global reducer file in `src/config/Global.js`
    - add or edit `src/config/Global.js` with
        ```
        function GlobalReducer(state = {
        	initialize: false,
        	moduleSwitch: false
        }, action){
        	switch(action.type){
        		case "CONSTANT_STRING":
        			console.log("YOU HAVE ACCESS REDUCER")
        			console.log("TRY MANIPULATE STORE")
        			return {
        				...state,
        				initialize: true
        			}
        		default: 
        			return {
        				...state
        			}
        	}
        }
        
        export default GlobalReducer
        ```
    - state in  reducer can be **Object** or an **Array**
    - after we done config our store, make connection between store and components
    - add or edit `src/routes/Sample.jsx` with
        ```
        import React from 'react'
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
        replace with
        ```
        import React from 'react'
        import { Link } from 'react-router-dom'
        
        import connect from 'redux-connect-decorator'
        @connect(store => ({ 
          global: store.global
        }))
        class Sample extends React.Component {
           componentDidMount(){
              this.props.dispatch({type: "CONSTANT_STRING"})
           }
           render() {
            console.log(this.props.global)
            return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
            );
           }
        }
        
        export default Sample;
        ```
    - try to run and see how it works with `npm start`# Thea-client
Ready Client Stack for Fast Development built by React and Material UI

## Requirement
- Internet Connection
- [Node.js latest version](https://nodejs.com) or NVM
- Basic knowledge React
- Basic knowledge React Router
- Basic knowledge Redux

## Getting Started

## Rebuild same repository Reminder
You can use `yarn add` instead `npm install` for package installer.
1. Install started react enviroment
   - [Optional] install yarn `npm install -g yarn` add global path to yarn in your system Windows/Linux
   - install webpack in global `npm install -g webpack`
   - install babel in global `npm install -g babel`
   - install babel cli in global `npm install -g babel-cli`
   - create folder container env `mkdir app-webpack`
   - open folder env `cd app-webpack`
   - initialize package.json with `npm init`
   - install webpack `npm install webpack --save`
   - install webpack-dev-server `npm install webpack-dev-server --save`
   - install react `npm install react --save`
   - install react-dom `npm install react-dom --save`
   - install babel-plugins `npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save`
   - create script directory `mkdir src`
   - create index.html index.js index.css src/App.jsx and webpack config `touch index.html index.js webpack.config.js src/App.jsx`
   - add or edit **index.html** and replace with
        ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React Env</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="index.js"></script>
        </body>
        </html>
        ```
   - add or edit **src/App.jsx** and replace with
        ```
        import React from 'react';
        
        class App extends React.Component {
           render() {
              return (
                 <div>
                    Hello React Script !!!
                 </div>
              );
           }
        }
        
        export default App;
        ```
    - add or edit **index.js** and replace with
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        ReactDOM.render(<App />, document.getElementById('app'));
        ```
    - add or edit **webpack.config.js** and replace with
        ```
        const path = require('path');

        var config = {
        	entry: './index.js',
        	output: {
                path: path.join(__dirname, "build/"),
                publicPath: "/",
                filename: "index.js"
            },
        	devServer: {
        		inline: true,
        		port: 8080
        	},
            module: {
        		loaders: [
        			{
        				test: /\.jsx?$/,
        				exclude: /node_modules/,
        				loader: 'babel-loader',
        					query: {
        						presets: ['es2015', 'react']
        					}
        			}
        		]
        	}
        }
        
        module.exports = config;
        ```
    - open **package.json** and replace this line
        ```
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        }, 
        ```
        with this 
        ```
        "scripts": {
            "start": "webpack-dev-server --hot",
            "build": "webpack"
        }, 
        ```
    - after all config has complete run with `npm start`
2. Integrate material-ui framework 
   - install material-ui `npm install material-ui --save`
   - import and add MuiThemeProvider see [Usage](http://www.material-ui.com/#/get-started/usage) for detail
   - install material-ui `npm install material-ui-icons --save`
3. Integrate react-router 
   - install react-router `npm install react-router --save`
   - install react-router-dom `npm install react-router-dom` --save
   - create config directory `mkdir src\config`
   - create routers config file `touch src\config\Routes.jsx`
   - create sample router configuration add or edit file in `src\config\Routes.jsx` with
        ```
        import React from 'react'
        import {
          HashRouter as Router,
          Route,
          Link
        } from 'react-router-dom'
        
        import Sample from './../routes/Sample.jsx'
        import SampleTwo from './../routes/SampleTwo.jsx'
        
        class Routes extends React.Component {
           render() {
              return (
                <Router>
                <div>
        		<Route exact path="/" component={Sample} />
        		<Route exact path="/sampleTwo" component={SampleTwo} />
                </div>
                </Router>
              );
           }
        }
        
        export default Routes
        ````
   - create entites folder `mkdir src\routes`
   - create sample entities `touch src\routes\Sample.jsx`
   - add or edit file `src\routes\Sample.jsx` with
        ```
        import React from 'react';
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
   - create second sample entities `touch src\routes\SampleTwo.jsx`
   - add or edit file `src\routes\SampleTwo.jsx` with
        ```
        import React from 'react';
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/">GO TO SAMPLE OR HOME</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
    - after config and sample components entities has been create add config file to our main components in `src/App.jsx`
    - add or edit `src/App.jsx` with
        ```
        import React from 'react';
        import Routes from './config/Routes.jsx'
        
        class App extends React.Component {
           render() {
              return (
                 <div>
                    <Routes />
                 </div>
              );
           }
        }
        
        export default App;
        ```
    - run application to see how it work with **npm start**
    - see detail of [Usage and Example](https://reacttraining.com/react-router/web/example/basic) in documentation
4. Integrate redux and react-redux
   - install babel-plugin-transform-decorators-legacy `npm install babel-plugin-transform-decorators-legacy --save`
   - install babel-plugin-transform-class-properties `npm install babel-plugin-transform-class-properties --save`
   - install babel-plugin-transform-object-rest-spread
 `npm install babel-plugin-transform-object-rest-spread`
   - add or edit our **webpack.config.js** with
       ```
       query: {
            presets: ['es2015', 'react']
       }
       ```
    - replace with
      ```
      query: {
		plugins: [
		    "transform-decorators-legacy", 
		    "transform-class-properties", 
		    "transform-object-rest-spread"
		    ],
			presets: ['es2015', 'react']
	  }
      ```
   - install redux `npm install redux --save`
   - install react-redux `npm install react-redux --save`
   - install react-thunk `npm install react-thunk --save`
   - install redux-decorator `npm install redux-connect-decorator --save`
   - install chrome ext react and redux dev tools ! 
   - visit [chrome webstore](https://chrome.google.com/webstore/category/extensions) and search react dev tool and redux dev tool
   - add or edit our main **index.js** 
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        ReactDOM.render(<App />, document.getElementById('app'));
        ```
    - replace with 
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './src/App.jsx';
        
        /* begin Redux Configuration */
        import { createStore, applyMiddleware } from 'redux'
        import { Provider } from 'react-redux'
        import thunk from 'redux-thunk'
        import Reducers from './src/config/Reducers'
        let store = createStore(Reducers, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        /* end Redux Configuration */
        
        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
        ```
    - create reducers config file `touch src/config/Reducers.js`
    - add or edit `src/config/Reducers.js` wtih 
        ```
        import { combineReducers } from 'redux'
        import GlobalReducer from './Global'
        
        const Reducers = combineReducers({
        	global: GlobalReducer
        })
        
        export default Reducers
        ```
    - create our first store called **Global Reducer** store that can be access anywhere
    - create global reducer file in `src/config/Global.js`
    - add or edit `src/config/Global.js` with
        ```
        function GlobalReducer(state = {
        	initialize: false,
        	moduleSwitch: false
        }, action){
        	switch(action.type){
        		case "CONSTANT_STRING":
        			console.log("YOU HAVE ACCESS REDUCER")
        			console.log("TRY MANIPULATE STORE")
        			return {
        				...state,
        				initialize: true
        			}
        		default: 
        			return {
        				...state
        			}
        	}
        }
        
        export default GlobalReducer
        ```
    - state in  reducer can be **Object** or an **Array**
    - after we done config our store, make connection between store and components
    - add or edit `src/routes/Sample.jsx` with
        ```
        import React from 'react'
        import { Link } from 'react-router-dom'
        
        class Sample extends React.Component {
           render() {
              return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
              );
           }
        }
        
        export default Sample;
        ```
        replace with
        ```
        import React from 'react'
        import { Link } from 'react-router-dom'
        
        import connect from 'redux-connect-decorator'
        @connect(store => ({ 
          global: store.global
        }))
        class Sample extends React.Component {
           componentDidMount(){
              this.props.dispatch({type: "CONSTANT_STRING"})
           }
           render() {
            console.log(this.props.global)
            return (
                 <div>
                    Hello Sample Script !!! 
                    <Link to="/sampleTwo">GO TO SAMPLE 2</Link>
                 </div>
            );
           }
        }
        
        export default Sample;
        ```
    - try to run and see how it works with `npm start`