import { Button } from '@components/Button'
import { RegularText } from '@components/Typography'
import { useCart } from 'hooks/useCart'
import { formatMoney } from 'utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const deliveryPrice = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const formattedCartTotal = formatMoney(cartItemsTotal)
  const formattedDeliveyPrice = formatMoney(deliveryPrice)
  const formattedTotal = formatMoney(cartItemsTotal + deliveryPrice)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedCartTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveyPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
