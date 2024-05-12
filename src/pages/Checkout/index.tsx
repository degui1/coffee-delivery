import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckoutContainer,
  FormContainer,
  InformSection,
  PaymentMethodContainer,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Radio } from '../../components/Form/Radio'
import { useTheme } from 'styled-components'

export function Checkout() {
  const theme = useTheme()
  const { register } = useForm()

  return (
    <CheckoutContainer>
      <main>
        <h1>Complete seu pedido</h1>
        <form action="">
          <FormContainer>
            <InformSection>
              <MapPinLine size={22} color={theme['yellow-dark']} />
              <div>
                <span>Endereco de entrega</span>
                <p>Informe o endereco onde deseja receber seu pedido</p>
              </div>
            </InformSection>
            <FormProvider>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </FormProvider>
          </FormContainer>
        </form>
        <PaymentMethodContainer>
          <InformSection>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InformSection>

          <div className="paymentContainer">
            <Radio
              isSelected={true}
              {...register('paymentMethod')}
              value="credit"
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>
            <Radio
              isSelected={false}
              {...register('paymentMethod')}
              value="credit"
            >
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>
            <Radio
              isSelected={false}
              {...register('paymentMethod')}
              value="credit"
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </div>
        </PaymentMethodContainer>
      </main>

      <aside>
        <h1>Cafés selecionados</h1>
      </aside>
    </CheckoutContainer>
  )
}
