import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthContext from './contexts/AuthContext'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <Router history={history}>
        <App />
      </Router>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
)
