import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './Styles/theme.js'
import GlobalStyle from './Styles/global.js'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
