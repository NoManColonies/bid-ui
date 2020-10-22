import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthContext from './contexts/AuthContext'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <Router>
        <App />
      </Router>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
)
