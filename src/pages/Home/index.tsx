import { Card } from './components/Card'
import { Feed } from './components/Feed'
import { CardsContainer, HomeContainer, Menu } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Feed />
      <Menu>
        <h1>Nossos Cafés</h1>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </Menu>
    </HomeContainer>
  )
}
