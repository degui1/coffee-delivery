import { ShoppingCart } from 'phosphor-react'

import { BuySection, CardCoffee } from './styles'

import Expresso from '../../../../assets/coffees/Expresso.svg'
import { Counter } from '../../../../components/Counter'

export function Card() {
  return (
    <CardCoffee>
      <img src={Expresso} alt="" />
      <span className="pill">Tradicional</span>
      <h3>Expresso tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuySection>
        <span>
          R$ <span className="cardPrice">9,90</span>
        </span>
        <Counter />
        <button>
          <ShoppingCart size={32} weight="fill" />
        </button>
      </BuySection>
    </CardCoffee>
  )
}
