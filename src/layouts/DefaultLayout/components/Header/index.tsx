import Logo from '@assets/logo.svg'
import { useCart } from 'hooks/useCart'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="Logo do Coffee Delivery" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Itanhaém, SP
          </HeaderButton>

          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
