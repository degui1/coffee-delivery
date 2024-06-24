import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../../public/images/Illustration.svg'
import {
  DeliveryContainer,
  DeliveryHeader,
  DeliveryInfoContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export function Delivery() {
  const theme = useTheme()

  const { cartState } = useCart()
  const { orderId } = useParams()

  const orderInfo = cartState.orders.find(
    (order) => order.id === Number(orderId),
  )

  if (!orderInfo?.id) {
    return null
  }

  const paymentMethodTranslation = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <DeliveryContainer>
      <DeliveryHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </DeliveryHeader>

      <section>
        <DeliveryInfoContainer>
          <div>
            <MapPin
              size={32}
              weight="fill"
              style={{ backgroundColor: theme.purple }}
            />
            <span>
              Entrega em{' '}
              <span>
                {orderInfo.fullAddress}, {orderInfo.number}
              </span>
              <p>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
              </p>
            </span>
          </div>
          <div>
            <Timer
              size={32}
              weight="fill"
              style={{ backgroundColor: theme.yellow }}
            />
            <span>
              Previsão de entrega
              <p>20 min - 30 min</p>
            </span>
          </div>
          <div>
            <CurrencyDollar
              size={32}
              weight="fill"
              style={{ backgroundColor: theme['yellow-dark'] }}
            />
            <span>
              Pagamento na entrega
              <p>{paymentMethodTranslation[orderInfo.paymentMethod]}</p>
            </span>
          </div>
        </DeliveryInfoContainer>

        <img src={illustration} alt="" />
      </section>
    </DeliveryContainer>
  )
}
