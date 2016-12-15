import * as C from './constants'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Soft dependancy for Material-UI, mobile responsiveness injection
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

//    /////
//    MATERIAL-UI THEME SETUP
//    /////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const materialUITheme = getMuiTheme(C.Theme)

import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const wrappedApp = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={materialUITheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
)

render(wrappedApp, document.getElementById('app'))
