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
  PaymentErrorMessage,
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
import { SubmitHandler, useForm } from 'react-hook-form'
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
  number: z.string().min(1, 'Informe o número da residência'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe o Estado'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

const shippingPrice = 3.5

export type OrderInfo = z.infer<typeof newOrder>

export function Checkout() {
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CartFormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const { cartState, dispatchCartState, navigate } = useCart()

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

  const totalPrice = coffeesInCart.reduce((previousValue, currentValue) => {
    return (previousValue += currentValue.price * currentValue.amount)
  }, 0)

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

  function handleRemoveItem(itemId: string) {
    dispatchCartState({
      type: CartActionTypes.REMOVE_ITEM,
      payload: {
        itemId,
      },
    })
  }

  const handleSuccessOrder: SubmitHandler<CartFormInputs> = (data) => {
    if (cartState.cart.length === 0) {
      return alert('Carrinho vazio')
    }

    dispatchCartState({
      type: CartActionTypes.CHECKOUT,
      payload: {
        order: data,
        callbackNavigation: navigate,
      },
    })
  }

  return (
    <CheckoutContainer>
      <main>
        <h1>Complete seu pedido</h1>

        <form id="order" onSubmit={handleSubmit(handleSuccessOrder)}>
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
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
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
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>

              {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null}
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
                        <RemoveListItemButton
                          onClick={() => {
                            handleRemoveItem(item.id)
                          }}
                        >
                          <Trash size={16} /> <span>Remover</span>
                        </RemoveListItemButton>
                      </ListActionsContainer>
                    </div>
                  </ListInfo>

                  <span>
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(item.price * item.amount)}
                  </span>
                </ListItem>
              )
            })}
          </OrderListContainer>

          <AmountContainer>
            <Value>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalPrice)}
              </span>
            </Value>
            <Value>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </Value>
            <Total>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalPrice + shippingPrice)}
              </span>
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
