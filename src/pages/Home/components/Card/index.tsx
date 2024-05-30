import { ShoppingCart } from 'phosphor-react'

import { BuySection, CardCoffee, InfoContainer, TagContainer } from './styles'

import Expresso from '../../../../assets/coffees/Expresso.svg'
import { Counter } from '../../../../components/Counter'
import { Coffee } from '../..'
import { Pill } from './components/pill'
import { useState } from 'react'

interface ICardProps {
  coffee: Coffee
}

export function Card({ coffee }: ICardProps) {
  const [amount, setAmount] = useState(0)

  function reduceAmount() {
    if (amount > 0) {
      setAmount((state) => state - 1)
    }
  }

  function increaseAmount() {
    setAmount((state) => state + 1)
  }

  return (
    <CardCoffee>
      <img src={Expresso} alt="" />
      <TagContainer>
        {coffee.tags.map((tag) => {
          return <Pill key={coffee.id}>{tag}</Pill>
        })}
      </TagContainer>
      <InfoContainer>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>

        <BuySection>
          <span>
            R$ <span className="cardPrice">{coffee.price}</span>
          </span>
          <Counter
            amount={amount}
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
