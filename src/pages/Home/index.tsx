import { Card } from './components/Card'
import { Feed } from './components/Feed'
import { CardsContainer, HomeContainer, Menu } from './styles'

import { coffees } from '../../../data.json'

export function Home() {
  return (
    <HomeContainer>
      <Feed />
      <Menu>
        <h1>Nossos Cafés</h1>
        <CardsContainer>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </CardsContainer>
      </Menu>
    </HomeContainer>
  )
}
