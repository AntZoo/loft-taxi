import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { theme } from 'loft-taxi-mui-theme' // Импортируем саму тему
import { MuiThemeProvider } from '@material-ui/core/styles'

const { Provider, Consumer } = React.createContext()

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)