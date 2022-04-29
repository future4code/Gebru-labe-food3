import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'

import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <h1>App</h1>
    </ThemeProvider>
  )
}

export default App