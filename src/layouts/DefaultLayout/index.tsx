import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { CartProvider } from '../../contexts/CartContext'
import { GlobalStyle } from '../../styles/global'

export function DefaultLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <LayoutContainer>
          <Header />
          <Outlet />
        </LayoutContainer>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}
