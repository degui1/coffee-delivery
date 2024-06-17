import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionContainer, HeaderContainer } from './styles'

import Logo from '../../../public/images/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
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

        <NavLink to="checkout" className="cartButton">
          <ShoppingCart size={22} />
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
