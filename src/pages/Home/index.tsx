import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Feed } from './components/Feed'
import { BuySection, Card, Counter, HomeContainer, Menu } from './styles'

import Expresso from '../../assets/coffees/Expresso.svg'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <HomeContainer>
      <Feed />
      <Menu>
        <h1>Nossos Cafés</h1>
        <Card>
          <img src={Expresso} alt="" />
          <span className="pill">Tradicional</span>
          <h3>Expresso tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuySection>
            <span>
              R$ <span className="cardPrice">9,90</span>
            </span>
            <Counter>
              <span>
                <Minus size={14} color={theme.purple} />
              </span>
              <span className="counterNumber">0</span>
              <span>
                <Plus size={14} color={theme.purple} />
              </span>
            </Counter>
            <button>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['purple-dark'] }}
              />
            </button>
          </BuySection>
        </Card>
      </Menu>
    </HomeContainer>
  )
}
