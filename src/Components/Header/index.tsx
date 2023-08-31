import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Coffe Delivery" />
      </NavLink>

      <nav>
        <a href="#">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </a>
        <NavLink to="/checkout" className="cart">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
