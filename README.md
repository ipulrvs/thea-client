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
3. Integrate redux framework
   - install babel-plugin-transform-decorators-legacy `npm install babel-plugin-transform-decorators-legacy --save`
   - install babel-plugin-transform-decorators `npm install babel-plugin-transform-decorators --save`
   - install redux `npm install redux --save`
   - install react-redux `npm install react-redux --save`
   - install react-thunk `npm install react-thunk --save`
   - install redux-decorator `npm install redux-connect-decorator --save`
   - install chrome ext react and redux dev tools