import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from './Components/Header'

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router /> 
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
