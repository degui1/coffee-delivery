import { ShoppingCart } from 'phosphor-react'

import { BuySection, CardCoffee, InfoContainer, TagContainer } from './styles'

import { Counter } from '../../../../components/Counter'
import { Pill } from './components/pill'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { CartActionTypes } from '../../../../reducers/Cart/CartReducer'

type ICardProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: ICardProps) {
  const [quantity, setQuantity] = useState(0)
  // const [isItemAdded, setIsItemAdded] = useState(false)

  const { dispatchCartState } = useCart()

  function reduceAmount(): void {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function increaseAmount(): void {
    setQuantity((state) => state + 1)
  }

  function handleAddItemToCart(): void {
    dispatchCartState({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        item: {
          id: coffee.id,
          amount: quantity,
        },
      },
    })
    setQuantity(0)
  }

  return (
    <CardCoffee>
      <img src={coffee.image} alt="Coffee image" />
      <TagContainer>
        {coffee.tags.map((tag) => {
          return <Pill key={crypto.randomUUID()}>{tag}</Pill>
        })}
      </TagContainer>
      <InfoContainer>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>

        <BuySection>
          <span>
            <span className="cardPrice">
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(coffee.price)}
            </span>
          </span>
          <Counter
            amount={quantity}
            onReduceAmount={reduceAmount}
            onIncreaseAmount={increaseAmount}
          />
          <button onClick={handleAddItemToCart}>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </BuySection>
      </InfoContainer>
    </CardCoffee>
  )
}
