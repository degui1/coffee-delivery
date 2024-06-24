import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionContainer, HeaderContainer } from './styles'

import Logo from '../../../public/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartState } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <ActionContainer>
        <button className="localizationButton">
          <MapPin size={22} />
          Porto Alegre, RS
        </button>

        <NavLink
          to="checkout"
          className="cartButton"
          aria-disabled={cartState.cart.length === 0}
        >
          <ShoppingCart size={22} />
          {cartState.cart.length > 0 ? (
            <span>{cartState.cart.length}</span>
          ) : null}
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
