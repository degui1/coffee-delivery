import {
  AmountContainer,
  AsideContainer,
  CheckoutContainer,
  FormContainer,
  FormFieldsContainer,
  InformSection,
  OrderButton,
  OrderContainer,
  OrderListContainer,
  PaymentContainer,
  PaymentMethodContainer,
  Total,
  Value,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { OrderListItem } from './components/OrderListItem'
import { OrderFormFields } from './components/OrderFormFields'
import { PaymentMethods } from './components/PaymentMethods'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <main>
        <h1>Complete seu pedido</h1>

        <form id="order">
          <FormContainer>
            <InformSection>
              <MapPinLine size={22} color={theme['yellow-dark']} />
              <div>
                <span>Endereco de entrega</span>
                <p>Informe o endereco onde deseja receber seu pedido</p>
              </div>
            </InformSection>
            <FormFieldsContainer>
              <OrderFormFields />
            </FormFieldsContainer>
          </FormContainer>

          <PaymentMethodContainer>
            <InformSection>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </InformSection>

            <PaymentContainer>
              <PaymentMethods />
            </PaymentContainer>
          </PaymentMethodContainer>
        </form>
      </main>
      <AsideContainer>
        <h1>Cafés selecionados</h1>
        <OrderContainer>
          <OrderListContainer>
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
          </OrderListContainer>
          <AmountContainer>
            <Value>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </Value>
            <Value>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Value>
            <Total>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Total>
          </AmountContainer>
          <OrderButton type="submit" form="order">
            Confirmar Pedido
          </OrderButton>
        </OrderContainer>
      </AsideContainer>
    </CheckoutContainer>
  )
}
