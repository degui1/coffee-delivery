import {
  AmountContainer,
  AsideContainer,
  CheckoutContainer,
  FormContainer,
  FormFieldsContainer,
  InformSection,
  ListActionsContainer,
  ListInfo,
  ListItem,
  OrderButton,
  OrderContainer,
  OrderListContainer,
  PaymentContainer,
  PaymentMethodContainer,
  RemoveListItemButton,
  Total,
  Value,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TextInput } from '../../components/Form/TextField'
import { useForm } from 'react-hook-form'
import { Radio } from '../../components/Form/Radio'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart'

import { coffees } from '../../../data.json'
import { Counter } from '../../components/Counter'
import { CartActionTypes } from '../../reducers/Cart/CartReducer'

type CartFormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number().min(1, 'Informe o número da residência'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe o Estado'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Checkout() {
  const theme = useTheme()
  const { register } = useForm<CartFormInputs>({
    resolver: zodResolver(newOrder),
  })

  const { cartState, dispatchCartState } = useCart()

  console.log(cartState)

  const coffeesInCart = cartState.cart.map((item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.id)
    if (!coffee) {
      throw new Error('Invalid coffee added to state')
    }

    return {
      ...coffee,
      amount: item.amount,
    }
  })

  function handleIncreaseAmount(itemId: string) {
    dispatchCartState({
      type: CartActionTypes.INCREMENT_ITEM_AMOUNT,
      payload: {
        itemId,
      },
    })
  }

  function handleReduceAmount(itemId: string) {
    dispatchCartState({
      type: CartActionTypes.DECREMENT_ITEM_AMOUNT,
      payload: {
        itemId,
      },
    })
  }

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
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={new Error('Test')}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={new Error('Test')}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={new Error('Test')}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={new Error('Test')}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={new Error('Test')}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={new Error('Test')}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={new Error('test')}
                {...register('state')}
              />
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
            </PaymentContainer>
          </PaymentMethodContainer>
        </form>
      </main>

      <AsideContainer>
        <h1>Cafés selecionados</h1>

        <OrderContainer>
          <OrderListContainer>
            {coffeesInCart.map((item) => {
              return (
                <ListItem key={item.id}>
                  <ListInfo>
                    <img src={item.image} alt="" />
                    <div>
                      <span>{item.title}</span>
                      <ListActionsContainer>
                        <Counter
                          amount={item.amount}
                          onIncreaseAmount={() => {
                            handleIncreaseAmount(item.id)
                          }}
                          onReduceAmount={() => {
                            handleReduceAmount(item.id)
                          }}
                        />
                        <RemoveListItemButton>
                          <Trash size={16} /> <span>Remover</span>
                        </RemoveListItemButton>
                      </ListActionsContainer>
                    </div>
                  </ListInfo>

                  <span>R$ 9,90</span>
                </ListItem>
              )
            })}
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
