import { ShoppingCart } from 'phosphor-react'

import { BuySection, CardCoffee, InfoContainer, TagContainer } from './styles'

import { Counter } from '../../../../components/Counter'
import { Pill } from './components/pill'
import { useState } from 'react'

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

  function reduceAmount() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function increaseAmount() {
    setQuantity((state) => state + 1)
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
            R$ <span className="cardPrice">{coffee.price}</span>
          </span>
          <Counter
            amount={quantity}
            onReduceAmount={reduceAmount}
            onIncreaseAmount={increaseAmount}
          />
          <button>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </BuySection>
      </InfoContainer>
    </CardCoffee>
  )
}
