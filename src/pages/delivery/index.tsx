import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.svg'
import {
  DeliveryContainer,
  DeliveryHeader,
  DeliveryInfoContainer,
} from './styles'
import { useTheme } from 'styled-components'

export function Delivery() {
  const theme = useTheme()
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
              Entrega em <span>x, 102</span>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p>Cartão de crédito</p>
            </span>
          </div>
        </DeliveryInfoContainer>

        <img src={illustration} alt="" />
      </section>
    </DeliveryContainer>
  )
}
