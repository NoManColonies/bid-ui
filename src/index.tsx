import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthContext from './contexts/AuthContext'
import { HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
)
