import { QuantityInput } from '@components/QuantityInput'
import { RegularText } from '@components/Typography'
import { CartItem } from 'contexts/CartContext'
import { useCart } from 'hooks/useCart'
import { Trash } from 'phosphor-react'
import { formatMoney } from 'utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const formattedPrice = formatMoney(coffee.price * coffee.quantity)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>

          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />

            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
