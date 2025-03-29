import { ThemeProvider } from "styled-components"
import GlobalStyles from "../../assets/styles/global"
import { defaultTheme } from "../../assets/styles/themes/default"
import { Container } from "./styles"
import { Header } from "../Header"
import { RouterProvider } from "react-router-dom"
import {  routes } from "../../Routes"


function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
        <Container>
          <Header />
            <RouterProvider router={routes}>
            </RouterProvider>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
